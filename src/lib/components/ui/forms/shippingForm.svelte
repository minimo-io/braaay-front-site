<!-- src/lib/components/ui/forms/shippingForm.svelte -->
<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { closeModal } from '$stores/modalState.state.svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { addCoupon, hasCoupon, removeCoupon } from '$lib/stores/cart.store.svelte';
	import { gql } from '@urql/core';
	import { toast } from 'svoast';
	import { m } from '$lib/paraglide/messages';
	import { Search } from '@lucide/svelte';
	import { PUBLIC_GRAPHQL_SERVER_PT } from '$env/static/public';

	let zipCode = $state('01222-001');
	let error = $state('');
	let zipCodeSanitized = $derived(zipCode.trim());
	let processing = $state(false);

	let isValidCep = $derived(/^\d{5}-\d{3}$/.test(zipCode));

	async function launchToast(text: string, type: 'success' | 'warning' | 'error') {
		if (text) {
			if (type == 'success') {
				toast.success(text, { closable: true });
			} else if (type == 'error') {
				toast.error(text, { closable: true });
			} else if (type == 'warning') {
				toast.warning(text, { closable: true });
			}
		}
	}

	function maskCep(value: string): string {
		const digits = value.replace(/\D/g, '').slice(0, 8); // Only digits, max 8
		if (digits.length <= 5) return digits;
		return `${digits.slice(0, 5)}-${digits.slice(5)}`;
	}

	// 1) Define your mutations & queries
	const UPDATE_GUEST_SHIPPING_ADDRESS = gql`
		mutation UpdateGuestShippingAddress($input: UpdateCustomerInput!) {
			updateCustomer(input: $input) {
				customer {
					sessionToken
					shipping {
						postcode
						country
					}
				}
			}
		}
	`;
	const GET_CART_SHIPPING_ESTIMATES = gql`
		query GetCartShippingEstimates {
			cart {
				availableShippingMethods {
					rates {
						id
						label
						cost
					}
				}
				shippingTotal
			}
		}
	`;

	const ADD_TO_CART = gql`
		mutation {
			addToCart(input: { productId: 131701, quantity: 1 }) {
				cart {
					contents {
						nodes {
							product {
								node {
									title
								}
							}
						}
					}
				}
			}
		}
	`;

	const QUERY_CART = gql`
		query {
			cart {
				contents {
					nodes {
						product {
							node {
								title
							}
						}
					}
				}
			}
		}
	`;

	async function handleSubmit() {
		processing = true;
		error = '';
		toggleLoader();
		document.body.classList.toggle('no-scroll');

		try {
			let client = getUrqlClient('', true).client;

			// Step 1: First update customer shipping details
			const updateResult = await client
				.mutation(UPDATE_GUEST_SHIPPING_ADDRESS, {
					input: {
						shipping: {
							postcode: zipCode,
							country: 'BR',
							overwrite: true
						}
					}
				})
				.toPromise();

			if (updateResult.error) {
				throw new Error(`Shipping update failed: ${updateResult.error.message}`);
			}

			// Get the initial session token
			const sessionToken = updateResult.data.updateCustomer.customer.sessionToken;
			console.log('Initial session token:', sessionToken);

			// Create headers with this session
			const sessionHeaders = {
				'Content-Type': 'application/json',
				'woocommerce-session': `Session ${sessionToken}`
			};

			// Step 2: Add product to cart with this session, but CAPTURE any new session that's created
			let currentSessionToken = sessionToken;
			let addToCartResponse;

			const addToCartResult = await client
				.mutation(
					ADD_TO_CART,
					{ productId: 131701, quantity: 1 },
					{
						fetchOptions: { headers: sessionHeaders },
						fetch: (input, init) => {
							return fetch(input, init).then((response) => {
								// Capture any new session token if provided
								const newSession = response.headers.get('woocommerce-session');
								if (newSession) {
									currentSessionToken = newSession.replace('Session ', '');
									console.log('New session from add to cart:', currentSessionToken);
								}
								addToCartResponse = response;
								return response;
							});
						}
					}
				)
				.toPromise();

			if (addToCartResult.error) {
				throw new Error(`Failed to add product: ${addToCartResult.error.message}`);
			}

			// Update headers with the latest session token
			const updatedSessionHeaders = {
				'Content-Type': 'application/json',
				'woocommerce-session': `Session ${currentSessionToken}`
			};

			// Step 3: Re-update the shipping address using the LATEST session token
			const reUpdateResult = await client
				.mutation(
					UPDATE_GUEST_SHIPPING_ADDRESS,
					{
						input: {
							shipping: {
								postcode: zipCode,
								country: 'BR',
								overwrite: true
							}
						}
					},
					{ fetchOptions: { headers: updatedSessionHeaders } }
				)
				.toPromise();

			// Capture the final session token to use for shipping estimates
			const finalSessionToken = reUpdateResult.data.updateCustomer.customer.sessionToken;
			console.log('Final session token:', finalSessionToken);

			const finalSessionHeaders = {
				'Content-Type': 'application/json',
				'woocommerce-session': `Session ${finalSessionToken}`
			};

			// Step 4: Now finally get shipping estimates with the final session
			const estimatesResult = await client
				.query(GET_CART_SHIPPING_ESTIMATES, {}, { fetchOptions: { headers: finalSessionHeaders } })
				.toPromise();

			if (estimatesResult.error) {
				console.error(estimatesResult.error.message);
				throw new Error('Failed to get shipping estimates');
			}

			console.log('Full shipping response:', estimatesResult.data);

			console.log('RESULTS', estimatesResult.data.cart.availableShippingMethods[0].rates);

			closeModal();
			toggleLoader();
			processing = false;
			document.body.classList.toggle('no-scroll');
		} catch (error) {
			console.error('Error in shipping workflow:', error);
			launchToast(`Error procesando o cep: ${error}`, 'error');
			toggleLoader();
			document.body.classList.toggle('no-scroll');
			processing = false;
			closeModal();
		}
	}
</script>

<form>
	<input
		disabled={processing}
		bind:value={zipCode}
		type="text"
		oninput={(e) => (zipCode = maskCep((e.target as HTMLInputElement).value))}
		placeholder={m.addYourZipCode()}
		class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
		maxlength="9"
		required
		onkeydown={(e) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				handleSubmit();
			}
		}}
	/>

	<div class="my-3 text-right mr-1">
		<a
			href="https://buscacepinter.correios.com.br/app/endereco/index.php"
			target="_blank"
			rel="nofollow noreferrer"
			class="text-xs flex items-center justify-end font-bold text-green-medium"
		>
			<Search class="h-3 mr-0 pr-0 relative -right-1" />Não sei meu CEP
		</a>
	</div>
	<div>
		<!-- <button type="submit" onclick={() => handleCouponSubmit()}>Aplicar cupom</button> -->
		<Button
			disabled={processing || !isValidCep}
			type="blue"
			size="md"
			rounded="lg"
			customPx="!h-[38px] !mt-2"
			title="Consultar"
			action={() => handleSubmit()}
		/>
	</div>
	{#if error}
		<div class="text-center text-xs mt-2 text-red-medium">{error}</div>
	{/if}
</form>
