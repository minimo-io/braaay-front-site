<!-- src/lib/components/ui/Teaser.svelte -->
<script lang="ts">
	import { CircleX } from '@lucide/svelte';
	import { fade, fly } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { m } from '$lib/paraglide/messages';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	// Cookie management functions
	function setCookie(name: string, value: string, days: number) {
		if (!browser) return;
		const expires = new Date();
		expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
	}

	function getCookie(name: string): string | null {
		if (!browser) return null;
		const nameEQ = name + '=';
		const ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	// Initialize teaser visibility based on cookie
	let isTeaserButtonVisible = $state(false);
	let isModalOpen = $state(false);
	let isLoaded = $state(false);

	// Form state management
	let isSubmitting = $state(false);
	let submitMessage = $state('');
	let submitStatus: 'success' | 'error' | '' = $state('');

	// Initialize visibility after component mounts
	$effect(() => {
		if (browser) {
			const cookieValue = getCookie('teaserVisible');
			if (cookieValue === null) {
				// No cookie exists, set default to true
				setCookie('teaserVisible', 'true', 7);
				isTeaserButtonVisible = true;
			} else {
				// Cookie exists, use its value
				isTeaserButtonVisible = cookieValue === 'true';
			}
			isLoaded = true;
		}
	});

	function openTeaserModal() {
		isModalOpen = true;
		// Reset form state when opening modal
		submitMessage = '';
		submitStatus = '';
		console.log('Opening modal');
	}

	function closeTeaserModal() {
		isModalOpen = false;
	}

	function disableTeaserButton() {
		isTeaserButtonVisible = false;
		setCookie('teaserVisible', 'false', 7);
	}

	// Handle escape key to close modal
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isModalOpen) {
			closeTeaserModal();
		}
	}

	// Form action enhancement
	const enhanceSubscribe: SubmitFunction = ({
		formElement,
		formData,
		action,
		cancel,
		submitter
	}) => {
		isSubmitting = true;
		submitMessage = '';
		submitStatus = '';

		return async ({ result, update }) => {
			isSubmitting = false;

			if (result.type === 'success') {
				submitStatus = 'success';
				submitMessage = 'Uhuu! Você foi inscrito com sucesso. Encontre o promocode no email. ';
				disableTeaserButton();
				// Clear the form
				formElement.reset();

				// Close modal after a delay
				setTimeout(() => {
					closeTeaserModal();
				}, 2000);
			} else if (result.type === 'failure') {
				submitStatus = 'error';

				// Handle specific error messages from the server
				if (result.data?.message) {
					submitMessage = result.data.message;
				} else {
					submitMessage = 'Erro ao se inscrever. Tente novamente mais tarde.';
				}
			} else if (result.type === 'error') {
				submitStatus = 'error';
				submitMessage = 'Erro inesperado. Tente novamente mais tarde.';
			}

			// Always call update to handle any other form state
			await update();
		};
	};
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isLoaded && isTeaserButtonVisible}
	<div
		in:fly={{ y: 200, duration: 500 }}
		out:fly={{ y: 200, duration: 500 }}
		class="fixed bottom-5 left-5 animate__animate animate__pulse animate__infinite z-50"
	>
		<!-- Teaser button -->
		<button
			onclick={() => openTeaserModal()}
			class="py-3 px-5 font-medium text-[14px] md:text-[16px] font-roboto bg-[#FAD83E] rounded-xl shadow-2xl flex items-center relative hover:bg-[#f5d332] transition-colors"
		>
			<span> {m.teaserText()} </span>
		</button>
		<!-- Disable teaser -->
		<button
			onclick={() => disableTeaserButton()}
			class="absolute -top-2 -right-4 hover:scale-110 transition-transform"
		>
			<CircleX class="h-6 text-white " fill="black" />
		</button>
	</div>
{/if}

<!-- Modal -->
{#if isModalOpen}
	<!-- Modal backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4"
		transition:fade={{ duration: 300 }}
		onclick={closeTeaserModal}
		role="dialog"
		tabindex="-1"
		aria-modal="true"
		aria-labelledby="modal-teaser"
	>
		<!-- Modal content -->
		<div
			role="button"
			tabindex="0"
			aria-label="Modal"
			class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex"
			transition:fly={{ y: 100, duration: 400, delay: 100 }}
			onclick={(e) => e.stopPropagation()}
		>
			<!-- Left side - Image -->
			<div class="hidden md:block w-[40%] relative">
				<div
					class="absolute inset-0 bg-cover bg-center"
					style="background-image: url('/images/braaay-kit.webp');"
				></div>
			</div>

			<!-- Right side - Content -->
			<div class="w-full md:w-[70%] p-8 md:p-12 flex flex-col justify-center relative">
				<!-- Close button -->
				<button
					onclick={closeTeaserModal}
					class="absolute top-1 right-1 md:top-6 md:right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
					aria-label="Fechar modal"
				>
					<CircleX class="h-6 w-6 text-gray-400" />
				</button>

				<!-- Brand name -->
				<!-- <div class="mb-8 text-right flex justify-center md:hidden">
					<img
						src="/images/braaay-logo-blue.svg"
						width="150"
						class="w-[150px]"
						alt="braaay-logo-plain"
					/>
				</div> -->

				<!-- Main heading -->
				<div class="mb-6 mt-0 md:mt-0">
					<h2
						id="modal-title"
						class="text-3xl md:text-4xl text-blue text-center md:text-left font-medium font-roboto md:leading-none mb-4"
					>
						{@html m.teaserTitle()}
					</h2>
					<p class="text-gray-600 text-base md:text-lg text-center md:text-left">
						{m.teaserContent()}
					</p>
				</div>

				<!-- Email form using form action -->
				<div class="space-y-4">
					<form method="POST" action="?/subscribe" use:enhance={enhanceSubscribe}>
						<div>
							<input
								type="email"
								name="email"
								placeholder="Email (requerido)"
								disabled={isSubmitting}
								class="w-full px-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:border-[#FAD83E] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
								required
							/>
						</div>

						<!-- Status message -->
						{#if submitMessage}
							<div
								class="text-sm mt-2 font-bold {submitStatus === 'success'
									? 'text-green-medium'
									: 'text-red-medium'} text-center"
							>
								{submitMessage}
							</div>
						{/if}

						<button
							type="submit"
							disabled={isSubmitting}
							class="w-full bg-[#FAD83E] hover:bg-blue text-black mt-2 hover:text-white font-bold py-3 md:py-4 px-6 rounded-xl transition-colors text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{#if isSubmitting}
								{m.sending()}
							{:else}
								{m.teaserButton()}
							{/if}
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Add custom animation if animate.css is not available */
	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	.animate__pulse {
		animation: pulse 2s infinite;
	}
</style>
