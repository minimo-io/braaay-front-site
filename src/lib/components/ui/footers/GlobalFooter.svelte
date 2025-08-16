<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { deLocalizeHref, getLocale, locales, localizeHref } from '$lib/paraglide/runtime';
	import { redirectLocale } from '$lib/utils';
	import SectionDivider from '$components/ui/dividers/SectionDivider.svelte';
	import { AppConfig } from '$config';
	import { trackEvent } from '$components/analytics';
	import FeaturesFooter from './FeaturesFooter.svelte';
	import { page } from '$app/state';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';

	function handleFwClick() {
		trackEvent('button_click_external', {
			event_category: 'navigation',
			event_label: 'to_futurewise'
		});
	}

	// let isProductPage: string | null = $state('');
	let isProductPage = $state<boolean>(false);
	const currentYear = new Date().getFullYear();

	$effect(() => {
		isProductPage = page.route?.id == '/produto/[productSlug]';
	});
</script>

<footer class="relative bg-grey-background py-0 mt-0">
	<!-- Divider -->
	<SectionDivider color="blue" />

	<!-- Footer -->
	<div class="max-w-screen-lg mx-auto px-[30px] lg:px-0">
		<!-- Logo -->
		<div class="flex justify-center mb-12">
			<img
				height="36"
				src="/images/logo-braaay-desktop.svg"
				alt="BRAAAY Logo"
				class="h-10 lg:h-9 object-contain mt-14"
			/>
		</div>

		<!-- Features Grid -->
		<FeaturesFooter />

		<hr class="border-b-1 border-grey-lighter my-10 w-full relative" />

		<!-- App Section and Footer Grid Container -->
		<div class="flex flex-col md:flex-row md:gap-8 justify-center items-center">
			<!-- App Section -->
			<div class="mb-8 md:mb-0 w-full md:w-1/3">
				<h3
					class="text-grey-medium text-center md:text-left font-medium italic font-prata text-[20px] mb-0"
				>
					{m.joinTheClub()}
				</h3>
				<h2 class="text-2xl font-bold mb-4 text-center md:text-left">APP DE CASHBACK</h2>
				<div class="flex gap-4 justify-center md:justify-start">
					<a href="/">
						<img src="/images/store-appstore.png" alt="apple-store" width="130" height="27" />
					</a>
					<a href="/">
						<img src="/images/store-googleplay.png" alt="apple-store" width="130" height="27" />
					</a>
				</div>
			</div>

			<!-- Footer Grid -->
			<div
				class="bry-footer-grid grid flex-shrink-0 grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 md:flex-1 mx-auto justify-center items-center"
			>
				<div class="text-center">
					<h3>{m.footerSupport()}</h3>
					<ul>
						<li>
							<a
								href={AppConfig.whatsappLink}
								rel="nofollow noreferrer"
								target="_blank"
								class="!text-black font-bold"
							>
								{AppConfig.tel[getLocale()]}
							</a>
						</li>
						<li>
							<a class="!text-black font-bold" href="mailto:contato@braaay.com">
								{AppConfig.email[getLocale()]}
							</a>
						</li>
						<li><a href="/">{m.footerSupportShipping()}</a></li>
						<li><a href="/">{m.footerSupportReturns()}</a></li>
					</ul>
				</div>
				<!-- Company Links -->
				<div class="md:block text-center">
					<h3>BRAAAY</h3>
					<ul>
						<li><a href="/">{m.sobreNos()}</a></li>
						{#if getLocale() == 'pt'}
							<li>
								<a href="/uva/tannat/">TANNAT</a>
							</li>
						{:else if getLocale() == 'uy'}
							<li>
								<a href="/uy/cervezas/">CERVEZAS</a>
							</li>
						{/if}
						<li><a href={localizeHref('/blog/')}>BLOG</a></li>
						<li><a href={localizeHref('/club/')}>{m.footerBraaayClub()}</a></li>
					</ul>
				</div>
				<!-- Social Media -->
				<div class="hidden md:block text-center">
					<h3>{m.footerSocials()}</h3>
					<ul>
						<li><a href="https://www.instagram.com/braaay_com">INSTAGRAM</a></li>
						<li><a href="/">YOUTUBE</a></li>
						<li><a href="/">TIKTOK</a></li>
						<li><a href="/">FACEBOOK</a></li>
					</ul>
				</div>
			</div>
		</div>

		<hr class="border-b-1 border-grey-lighter mt-10 mb-5 w-full relative" />

		<div
			class="mx-auto px-[30px] text-center text-[13px] leading-5 font-roboto text-grey-medium mb-5"
		>
			<p>
				{AppConfig.foundingDate}-{currentYear}
				• Braaay • {m.companyDocumentType()}:
				{AppConfig.legal[getLocale()].code}. • {m.zipCodeName()}: {AppConfig.address[getLocale()]
					.zipCode}. <br />
				{m.footerDisclaimer2()}
				<a href="/" class="text-black font-medium capitalize">{m.footerSupportReturns()}</a>
				|
				<a href="/" class="text-black font-medium">*{m.footerDisclaimer3()}</a>
			</p>
			<!-- Locales -->
			<div class="text-center my-2">
				{#if locales}
					{#each locales as locale, i}
						<button
							type="button"
							onclick={async () => {
								toggleLoader();
								await redirectLocale(locale);
							}}
							class="text-black text-xs cursor-pointer bg-transparent border-none p-0"
						>
							<img
								src={locale === 'pt' ? '/images/flags/brazil.png' : '/images/flags/uruguay.png'}
								alt="flag-{locale}"
								class="inline w-[13px] h-[13px] mb-[3px] mr-[1px]"
							/>
							<span>{locale === 'pt' ? 'Brasil' : 'Uruguay'}</span>
						</button>
						{#if i < locales.length - 1}
							<span class="mx-2">/</span>
						{/if}
					{/each}
				{/if}
			</div>
		</div>

		<!-- Futurewise -->
		<div
			class={[
				'border-t border-grey-lighter py-5 grid grid-cols-1 md:grid-cols-3 gap-4',
				isProductPage && 'md:mb-20 md:!py-0'
			]}
		>
			<!-- CTA -->
			<div
				class={[
					'text-xs text-grey-medium flex flex-col justify-center md:mb-4 text-center md:text-left',
					isProductPage && 'md:mt-5'
				]}
			>
				<span> {m.footerDeveloper1()}. </span>

				<a
					onclick={() => handleFwClick}
					href="https://futurewise.lat/bagity"
					target="_blank"
					rel="noopener"
					class="underline text-grey-darkest"
				>
					{m.footerDeveloper2()}
				</a>
			</div>

			<!-- Middle version -->
			<div
				class={[
					'text-xs text-grey-medium text-center flex flex-col justify-center',
					isProductPage && 'md:mt-5'
				]}
			>
				v{__APP_VERSION__}<br />
				{@html m.footerDisclaimer4()}
			</div>

			<!-- Futurewise logo -->
			<div
				class={[
					'text-xs text-center flex flex-col justify-center',
					isProductPage && 'mb-16 md:mb-0 md:mt-5'
				]}
			>
				<div class="text-right justify-center md:justify-end self-center md:self-end flex">
					<a
						target="_blank"
						rel="noopener"
						href="https://futurewise.lat  "
						onclick={() => handleFwClick}
					>
						<img
							src="/images/futurewise-logo-2.svg"
							width="100"
							height="40"
							class="h-10"
							alt="futurewise-bagity"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
