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
	import { launchToast } from '$lib/utils';
	import { AppConfig } from '$config';

	const orderId = page.params.orderId;
	const data = $derived(page.data);

	// const data = {
	// 	errors: [],
	// 	success: true,
	// 	payment: {
	// 		order_id: 'ORD01JX087FGVMY18TCS75A337Z0V',
	// 		payment_id: 'PAY01JX087FGVMY18TCS75AF8VDHR',
	// 		status: 'action_required',
	// 		status_detail: 'waiting_transfer',
	// 		payment_status: 'action_required',
	// 		payment_status_detail: 'waiting_transfer',
	// 		qrcode:
	// 			'00020126580014br.gov.bcb.pix0136e9a20877-7c93-46a5-b8d8-07f160201f275204000053039865406140.605802BR5913BRAAAY_BRASIL6008So Paulo62250521mpqrinter1135202282616304F2E8',
	// 		qrcode_base64:
	// 			'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',
	// 		ticket_url:
	// 			'https://www.mercadopago.com.br/payments/113520228261/ticket?caller_id=2470051258&hash=55d0ac5c-8d73-4deb-8d32-849fe282f7ea',
	// 		external_reference: '132293',
	// 		total_amount: '140.60',
	// 		amount: '140.60',
	// 		country_code: 'BRA'
	// 	}
	// };

	const qrCodeCopiaECola = $state(data.payment.qrcode);

	// Determines if the navigation alert should be shown.
	// It's initially true and becomes false if payment is approved or user confirms leaving.
	let showNavigationAlert = $state(true);
	// Add these timer variables after your existing state declarations
	let timeRemaining = $state(AppConfig.payments.timeout * 60); // 30 minutes in seconds
	let timerInterval: NodeJS.Timeout | null = null;
	let isTimerActive = $state(true);

	// Format time as MM:SS
	const formatTime = (seconds: number): string => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
	};

	// Auto-disable alerts if payment status changes to approved
	$effect(() => {
		if (data?.payment?.payment_status === 'approved') {
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
		if (!showNavigationAlert || data?.payment?.payment_status === 'approved') {
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

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
			window.removeEventListener('popstate', handlePopState);
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
