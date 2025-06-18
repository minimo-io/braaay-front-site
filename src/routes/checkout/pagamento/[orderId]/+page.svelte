<script lang="ts">
	import { page } from '$app/state';
	import { beforeNavigate, pushState, goto } from '$app/navigation';
	import { onMount, tick } from 'svelte';
	import { m } from '$lib/paraglide/messages';
	import { toggleLoader, loaderActivated } from '$stores/loaderStore.state.svelte';
	import { Check, Coins } from '@lucide/svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { Button, MoreInfoButton } from '$components/ui/buttons';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import CheckoutPaymentQrSteps from '$components/ui/checkout/CheckoutPaymentQRSteps.svelte';
	import { generateBasicAuthorization, launchToast } from '$lib/utils';
	import { AppConfig } from '$config';

	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { ORDER_QUERY_STATUS } from '$lib/graphql/queries/order-get-status.query';
	import { PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY } from '$env/static/public';
	import { emptyCart } from '$stores/cart.store.svelte';

	const orderId = page.params.orderId;
	const data = $derived(page.data);

	const qrCodeCopiaECola = $state(data.payment.qrcode);

	// Determines if the navigation alert should be shown.
	// It's initially true and becomes false if payment is approved or user confirms leaving.
	let showNavigationAlert = $state(true);
	// Add these timer variables after your existing state declarations
	let timeRemaining = $state(AppConfig.payments.timeout * 60); // 30 minutes in seconds
	let timerInterval: NodeJS.Timeout | null = null;
	let isTimerActive = $state(true);
	// --- VARIABLE FOR STATUS CHECK INTERVAL ---
	let statusCheckInterval: NodeJS.Timeout | null = null;
	// --- END NEW VARIABLE ---

	// Format time as MM:SS
	const formatTime = (seconds: number): string => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
	};

	// Auto-disable alerts if payment status changes to approved
	$effect(() => {
		if (data?.payment?.payment_status === 'COMPLETED') {
			showNavigationAlert = false;
		}

		if (isTimerActive && timeRemaining > 0) {
			timerInterval = setInterval(() => {
				timeRemaining--;

				if (timeRemaining <= 0) {
					// Timer expired - redirect
					clearInterval(timerInterval!);
					isTimerActive = false;
					showNavigationAlert = false; // Disable navigation alert

					// Redirect to checkout or desired route
					goto(localizeHref('/checkout/error/?code=timeout'));
				}
			}, 1000);
		}

		// Cleanup function
		return () => {
			if (timerInterval) {
				clearInterval(timerInterval);
			}
		};
	});

	/**
	 * Handles the user's attempt to navigate away (back, reload, close, or internal SvelteKit navigation).
	 * @returns {boolean} true if navigation should proceed, false if it should be cancelled.
	 */
	const handleNavigationAttempt = () => {
		if (!showNavigationAlert || data?.payment?.payment_status === 'COMPLETED') {
			return true; // Allow navigation if alerts are disabled or payment is approved
		}

		const confirmed = confirm(m.checkoutAreYouSureToLeave());
		if (confirmed) {
			// User confirmed leaving, disable further alerts for this session
			showNavigationAlert = false;
			return true; // Allow navigation
		} else {
			return false; // Cancel navigation
		}
	};

	// --- NEW FUNCTION TO CHECK ORDER STATUS ---
	const checkOrderStatus = async () => {
		if (!orderId) {
			console.error('Order ID is not available to check status.');
			return;
		}

		const client = getUrqlClient('', true).client; // Get your Urql client
		try {
			const result = await client
				.query(
					ORDER_QUERY_STATUS,
					{ orderId },
					{
						requestPolicy: 'network-only',
						fetchOptions: {
							headers: {
								authorization: `Basic ${generateBasicAuthorization(PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY)}`
							}
						}
					}
				)
				.toPromise();

			if (result.error) {
				console.error('Error fetching order status:', result.error.message);
			} else if (result.data?.order?.status) {
				// console.log('Current Order Status:', result.data.order.status);
				const currentOrderStatus = result.data.order.status;
				if (currentOrderStatus == 'COMPLETED') {
					console.log(`Order completed: ${currentOrderStatus}. Redirecting...`);
					showNavigationAlert = false;
					// Empty cart
					emptyCart();
					goto(localizeHref(`/checkout/confirmation/${orderId}/`));
				}
			} else {
				console.log('Order status not found or unexpected data:', result);
			}
		} catch (error) {
			console.error('Exception during order status check:', error);
		}
	};
	// --- END NEW FUNCTION ---

	onMount(() => {
		// Handle the pushState call asynchronously but don't make onMount async
		(async () => {
			// Wait for the next tick to ensure the router is initialized
			await tick();

			// Small additional delay to ensure router is fully ready
			setTimeout(() => {
				try {
					// This ensures the current state is added to history, so `popstate` can detect a "back" action.
					// It helps when the user lands directly on this page and then tries to go back.
					pushState('', {});
				} catch (error) {
					console.warn('Failed to push state, router may not be ready:', error);
				}
			}, 0);
		})();

		// timeRemaining = 10 * 60;
		isTimerActive = true;

		// toggleLoader();
		loaderActivated.active = false;

		// Handle browser refresh/close
		const handleBeforeUnload = (event: BeforeUnloadEvent) => {
			if (!handleNavigationAttempt()) {
				event.preventDefault();
				event.returnValue = ''; // Required for some browsers
			}
		};

		// Handle browser back button (popstate)
		const handlePopState = () => {
			// When popstate fires, it means the browser is already trying to go back.
			// If the user *doesn't* confirm, we want to push the current state again
			// to effectively "undo" the back navigation and prevent changing the URL.
			if (!handleNavigationAttempt()) {
				// If the user cancelled, push the current state to prevent the back navigation
				try {
					pushState('', {});
				} catch (error) {
					console.warn('Failed to push state in popstate handler:', error);
				}
			} else {
				// If the user confirmed, navigate to checkout as requested
				goto(localizeHref('/checkout/'));
			}
		};

		window.addEventListener('beforeunload', handleBeforeUnload);
		window.addEventListener('popstate', handlePopState);

		// --- NEW STATUS CHECKER ---
		// Call it immediately once, then set the interval
		checkOrderStatus(); // Initial check
		statusCheckInterval = setInterval(checkOrderStatus, AppConfig.statusCheckDuration);
		// --- END NEW STATUS CHECKER ---

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
			window.removeEventListener('popstate', handlePopState);
			// --- CLEANUP FOR STATUS CHECK INTERVAL ---
			if (statusCheckInterval) {
				clearInterval(statusCheckInterval);
			}
			// --- END CLEANUP ---
		};
	});

	// Handle SvelteKit internal navigation (e.g., clicking a link)
	beforeNavigate(({ cancel, to }) => {
		// Only intervene if navigating to a different pathname (i.e., truly leaving this page)
		if (to?.url?.pathname !== page.url.pathname) {
			if (!handleNavigationAttempt()) {
				cancel(); // Prevent SvelteKit navigation
			}
		}
	});
</script>

<!-- --- PAGO: {orderId} -->
<main>
	{#if data.success}
		<div class="max-w-screen-lg md:mx-auto mt-8">
			<!-- Thank you message -->
			<div class="flex flex-col items-center md:items-start mx-5 md:mx-0">
				<h2 class=" text-xl md:text-2xl font-black flex items-center">
					<span
						class="inline-flex items-center justify-center w-6 h-6 bg-green-medium text-grey-background rounded-full mr-2 text-xs"
					>
						<Check class="h-full ml-1" />
					</span>
					<!-- <span>OBRIGADO!&nbsp;</span> -->
					<!-- Seu pedido está pendente de pagamento -->
					Pedido pendente de pagamento
				</h2>
				<p class="md:ml-8 mx-6 mt-1 text-center md:text-left leading-tight">
					Agora e só escanear e realizar o pagamento para finalizar a sua compra
				</p>
			</div>

			<!-- Main Payment Box -->
			<div class="grid grid-cols-1 md:grid-cols-[1.15fr_1.85fr] gap-0 md:gap-7">
				<!-- Payment details left -->
				<div class="mt-8">
					<div class="bg-white py-4 px-5 md:border border-grey-lighter md:rounded-lg">
						<!-- Pix logo -->
						<div class="flex items-center flex-col mt-3 mb-7">
							<img
								src="/images/logo-pix.svg"
								class="w-[45%] md:w-[50%] -left-2 relative"
								alt="logo-pix"
							/>
						</div>
						<!-- Time -->
						<div class="flex justify-between mt-2 py-4 border-t border-b border-grey-lighter">
							<p class="font-light ml-1 text-[15px] self-center">Tempo restante</p>
							<p
								class="font-roboto self-center text-[16px] font-bold tracking-wide {timeRemaining <=
								60
									? 'text-red-medium'
									: 'text-green-medium'}"
							>
								{formatTime(timeRemaining)}
							</p>
						</div>
						<!-- Status -->
						<div class="flex justify-between py-4 border-b border-grey-lighter">
							<p class="font-light ml-1 text-[15px] self-center">Status</p>
							<p class="font-roboto self-center text-[16px] font-bold tracking-wide">
								{data.payment.status_detail}
							</p>
						</div>
						<!-- ID -->
						<div class="flex justify-between py-4 border-b border-grey-lighter">
							<p class="font-light ml-1 text-[15px] self-center">Identificador</p>
							<p class="font-roboto self-center text-[16px] font-bold tracking-wide">
								#{orderId}
							</p>
						</div>
						<!-- Cashback -->
						<div class="flex justify-between py-4 border-grey-lighter">
							<div class="font-light ml-1 text-[15px] flex self-center items-center">
								<div><Coins class="h-4 text-sun" /></div>
								<span>Cashback a ganhar</span>
							</div>
							<p class="font-roboto self-center text-[16px] font-bold tracking-wide">
								<span class="font-normal">{m.currencySymbol()}</span>&nbsp;7,03
							</p>
						</div>

						<!-- Divider -->
						<Divider color="blue" extraClasses="mt-0 mb-4 !border-b-grey-lighter" />
						<!-- Step by Step Desktop -->
						<div class="hidden md:block">
							<CheckoutPaymentQrSteps />
						</div>
					</div>

					<div class="hidden md:block md:my-36"></div>
				</div>
				<!-- Payment main box -->
				<div class="md:mt-8 -top-4 md:-top-0 relative">
					<div class="flex flex-col">
						<div class="md:border border-grey-lighter bg-white rounded-lg p-5 pt-0 md:pt-5 order-1">
							<!-- Payment box title -->
							<div
								class="flex justify-center border-b border-grey-lighter pb-4 text-[19px] md:text-[17px]"
							>
								<div class="mr-5 text-blue">Valor a pagar</div>
								<div class="font-bold text-blue">
									<span class="font-normal text-[17px] md:text-[15px]">{m.currencySymbol()}</span>
									{data.payment.total_amount}
									<!-- {data.payment.country_code} -->
								</div>
							</div>
							<!-- Payment box QR code -->

							{#if data.payment.qrcode_base64}
								<div class="flex justify-center pt-4">
									<div class="text-blue">Escaneie o código QR</div>
								</div>
								<img
									src="data:image/png;base64,{data.payment.qrcode_base64}"
									alt="QR Code PIX"
									class="w-[70%] md:w-[40%] mx-auto"
								/>
							{/if}
							<div class="flex justify-center pt-0 text-sm opacity-50 mb-3 text-blue">
								<div>Válido por {AppConfig.payments.timeout} minutos</div>
							</div>
							<!-- Copia e Cola -->
							<div
								class="flex border-t border-grey-lighter border-b justify-center pt-0 text-sm text-blue"
							>
								<div class="opacity-90 my-4">
									Se preferir, você pode copiar e colar o seguinte código.
								</div>
							</div>
							<!-- Copia e Cola Form -->
							<div class="mt-5">
								<div class="flex flex-row">
									<input
										value={qrCodeCopiaECola}
										disabled
										type="text"
										placeholder="Nome"
										class="w-full mr-4 px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
									/>
									<div class="w-[210px]">
										<Button
											type="sun"
											action={() => {
												navigator.clipboard
													.writeText(qrCodeCopiaECola)
													.then(() => {
														launchToast(m.copiedToClipboard(), 'success', 2000);
														// console.log('Copied to clipboard');
													})
													.catch((err) => {
														launchToast(`${m.copiedError()} ${err}`, 'error', 2000);
													});
											}}
											title={m.copy()}
											size="xl"
											tracking="normal"
											customPx="w-full"
											font="xl"
											bold={false}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Step by Step Desktop -->
				<div class="block md:hidden mx-5 -top-3 relative">
					<CheckoutPaymentQrSteps />
				</div>
			</div>
		</div>

		<!-- OLD STUFF -->
		<!-- <div class="payment-success">
			<h2>Pago creado exitosamente</h2>
			<div class="payment-info">
				<p><strong>ID de Orden:</strong> {data.payment.order_id}</p>
				<p><strong>ID de Pago:</strong> {data.payment.payment_id}</p>
				<p>
					<strong>Estado de la Orden:</strong>
					{data.payment.status} ({data.payment.status_detail})
				</p>
				<p>
					<strong>Estado del Pago:</strong>
					{data.payment.payment_status} ({data.payment.payment_status_detail})
				</p>
				<p><strong>Monto:</strong> ${data.payment.total_amount} {data.payment.country_code}</p>
			</div>

			{#if data.payment.qrcode}
				<div class="qr-section">
					<h3>Código QR para Pago PIX</h3>
					<div class="qr-code">
						{#if data.payment.qrcode_base64}
							<img src="data:image/png;base64,{data.payment.qrcode_base64}" alt="QR Code PIX" />
						{/if}
						<div class="qr-text">
							<p><strong>Código PIX (Copia y Pega):</strong></p>
							<code>{data.payment.qrcode}</code>
							<button onclick={() => navigator.clipboard.writeText(data.payment.qrcode)}>
								Copiar Código PIX
							</button>
						</div>
					</div>
					<p class="instructions">
						Escanea el código QR con tu app bancaria o copia el código PIX para realizar el pago.
					</p>
					{#if data.payment.ticket_url}
						<p class="ticket-link">
							<a href={data.payment.ticket_url} target="_blank" rel="noopener noreferrer">
								Ver comprobante de pago
							</a>
						</p>
					{/if}
				</div>
			{/if}
		</div> -->
	{:else if data.errors}
		<div class="payment-error">
			<h2>Error en el Pago</h2>
			<div class="error-details">
				{#if data.errors.length > 0}
					{#each data.errors as error, index}
						<div class="error-item" class:main-error={index === 0}>
							<p><strong>Mensaje:</strong> {error.message}</p>
							<p><strong>Código:</strong> {error.code}</p>

							<!-- {#if error.code === 'invalid_email_for_sandbox'}
								<div class="error-help">
									<h4>💡 Solución:</h4>
									<p>
										Para el entorno de pruebas (sandbox), el email debe tener el formato: <code
											>usuario@testuser.com</code
										>
									</p>
									<p>Ejemplo: <code>nicolas@testuser.com</code></p>
								</div>
							{/if} -->
						</div>
					{/each}
				{/if}
			</div>
			<button onclick={() => window.location.reload()}> Intentar nuevamente </button>
		</div>
	{:else}
		<div class="loading">
			<p>Procesando pago...</p>
		</div>
	{/if}
</main>

<style>
	/* Your existing styles here */

	.payment-error {
		background: #f8d7da;
		border: 1px solid #f5c6cb;
		border-radius: 8px;
		padding: 20px;
		margin: 20px 0;
	}
	.error-details {
		margin: 15px 0;
	}

	.error-item {
		margin: 15px 0;
		padding: 15px;
		background: white;
		border: 1px solid #f5c6cb;
		border-radius: 4px;
	}

	.error-item.main-error {
		border-left: 4px solid #dc3545;
	}

	button {
		background: #007bff;
		color: white;
		border: none;
		padding: 10px 20px;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 15px;
	}

	button:hover {
		background: #0056b3;
	}

	.loading {
		text-align: center;
		padding: 40px;
		color: #666;
	}
</style>
