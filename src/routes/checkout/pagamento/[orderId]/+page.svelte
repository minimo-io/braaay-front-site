<script lang="ts">
	import { page } from '$app/state';

	const orderId = page.params.orderId;
	const data = $derived(page.data);
</script>

PAGO: {orderId}

{#if data.success}
	<div class="payment-success">
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
	</div>
{:else if data.errors}
	<div class="payment-error">
		<h2>Error en el Pago</h2>
		<div class="error-details">
			{#each data.errors as error, index}
				<div class="error-item" class:main-error={index === 0}>
					<p><strong>Mensaje:</strong> {error.message}</p>
					<p><strong>Código:</strong> {error.code}</p>

					<!-- Context-sensitive help for specific errors -->
					{#if error.code === 'invalid_email_for_sandbox'}
						<div class="error-help">
							<h4>💡 Solución:</h4>
							<p>
								Para el entorno de pruebas (sandbox), el email debe tener el formato: <code
									>usuario@testuser.com</code
								>
							</p>
							<p>Ejemplo: <code>nicolas@testuser.com</code></p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
		<button onclick={() => window.location.reload()}> Intentar nuevamente </button>
	</div>
{:else}
	<div class="loading">
		<p>Procesando pago...</p>
	</div>
{/if}

<style>
	.payment-container {
		max-width: 600px;
		margin: 0 auto;
		padding: 20px;
		font-family: Arial, sans-serif;
	}

	.payment-success {
		background: #d4edda;
		border: 1px solid #c3e6cb;
		border-radius: 8px;
		padding: 20px;
		margin: 20px 0;
	}

	.payment-error {
		background: #f8d7da;
		border: 1px solid #f5c6cb;
		border-radius: 8px;
		padding: 20px;
		margin: 20px 0;
	}

	.payment-info {
		margin: 15px 0;
	}

	.qr-section {
		margin-top: 20px;
		text-align: center;
	}

	.qr-code {
		margin: 15px 0;
		padding: 20px;
		background: white;
		border: 1px solid #ddd;
		border-radius: 8px;
	}

	.qr-code img {
		max-width: 256px;
		height: auto;
	}

	.qr-text code {
		background: #f8f9fa;
		padding: 10px;
		border-radius: 4px;
		font-family: monospace;
		word-break: break-all;
		display: block;
		margin: 10px 0;
		font-size: 12px;
		max-height: 100px;
		overflow-y: auto;
	}

	.qr-text button {
		margin-top: 10px;
		background: #28a745;
		font-size: 14px;
	}

	.qr-text button:hover {
		background: #218838;
	}

	.ticket-link {
		margin-top: 15px;
	}

	.ticket-link a {
		color: #007bff;
		text-decoration: none;
		font-weight: bold;
	}

	.ticket-link a:hover {
		text-decoration: underline;
	}

	.instructions {
		font-size: 14px;
		color: #666;
		margin-top: 15px;
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

	.error-help {
		margin: 15px 0 0 0;
		padding: 15px;
		background: #d1ecf1;
		border: 1px solid #bee5eb;
		border-radius: 4px;
		border-left: 4px solid #17a2b8;
	}

	.error-help h4 {
		margin-top: 0;
		color: #0c5460;
	}

	.error-help code {
		background: #e2e3e5;
		padding: 2px 4px;
		border-radius: 3px;
		font-family: monospace;
	}

	details {
		margin-top: 10px;
	}

	pre {
		background: #f8f9fa;
		padding: 10px;
		border-radius: 4px;
		overflow-x: auto;
		font-size: 12px;
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
