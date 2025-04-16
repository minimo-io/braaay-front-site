<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { redirectLocale } from '$lib/utils';
	import SectionDivider from '$components/ui/dividers/SectionDivider.svelte';
</script>

<footer class="relative bg-grey-background py-0 mt-0">
	<SectionDivider color="blue" />
	<div class="max-w-screen-lg mx-auto px-[30px] lg:px-0">
		<!-- Logo -->
		<div class="flex justify-center mb-12">
			<img
				src="/images/logo-braaay-desktop.svg"
				alt="BRAAAY Logo"
				class="h-10 lg:h-9 object-contain mt-14"
			/>
		</div>

		<!-- Features Grid -->
		<div class="bry-footer-features">
			<!-- Feature 1 -->
			<div>
				<h2 class="partial-border">Especialistas em 🇺🇾 e 🇧🇷</h2>
				<p>
					Viajamos, conhecemos, nos aventuramos e trazemos a melhor seleção de vinhos uruguaios e
					nacionais.
				</p>
			</div>

			<!-- Feature 2 -->
			<div>
				<h2 class="text-xl font-semibold mb-4">Pagamento em até 4x</h2>
				<p>
					Você pode pagar no cartão sem juros com parcela mínima de R$50, no boleto, PIX ou usar sua
					e-Wallet preferida.
				</p>
			</div>

			<!-- Feature 3 -->
			<div>
				<h2 class="text-xl font-semibold mb-4">Experiências além da taça</h2>
				<p>
					Venha explorar e conhecer o showroom, participe dos workshops ou faça parte do grupo de
					viagens e aventuras!
				</p>
			</div>
		</div>

		<hr class="border-b-1 border-grey-lighter my-10 w-full relative" />

		<!-- App Section and Footer Grid Container -->
		<div class="flex flex-col md:flex-row md:gap-8 justify-center items-center">
			<!-- App Section -->
			<div class="mb-8 md:mb-0 w-full md:w-1/3">
				<h3
					class="text-grey-medium text-center md:text-left font-medium italic font-prata text-[20px] mb-0"
				>
					Faça parte do clube!
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
					<h3>SUPORTE</h3>
					<ul>
						<li>
							<a
								href="https://wa.me/5511947530340"
								rel="nofollow noreferrer"
								target="_blank"
								class="!text-black font-bold"
							>
								+55 11 94753-0340
							</a>
						</li>
						<li>
							<a class="!text-black font-bold" href="mailto:contato@braaay.com">
								contato@braaay.com
							</a>
						</li>
						<li><a href="/">POLÍTICA DE FRETES</a></li>
						<li><a href="/">TROCAS E DEVOLUÇÕES</a></li>
					</ul>
				</div>
				<!-- Company Links -->
				<div class="md:block text-center">
					<h3>BRAAAY</h3>
					<ul>
						<li><a href="/">{m.sobreNos()}</a></li>
						<li>
							<a href="/blog/tannat-day-150-anos-dos-melhores-tannat-do-mundo-14-de-abril/"
								>TANNAT DAY</a
							>
						</li>
						<li><a href={localizeHref('/blog/')}>BLOG</a></li>
						<li><a href="/">SHOWROOM</a></li>
					</ul>
				</div>
				<!-- Social Media -->
				<div class="hidden md:block text-center">
					<h3>REDES SOCIAIS</h3>
					<ul>
						<li><a href="/">INSTAGRAM</a></li>
						<li><a href="/">YOUTUBE</a></li>
						<li><a href="/">TIKTOK</a></li>
						<li><a href="/">FACEBOOK</a></li>
					</ul>
				</div>
			</div>
		</div>

		<hr class="border-b-1 border-grey-lighter mt-10 mb-5 w-full relative" />

		<div
			class="mx-auto px-[30px] text-center text-[14px] leading-5 font-roboto text-grey-medium mb-5"
		>
			<p>
				A venda de bebidas alcoólicas é proibida para menores de 18 anos © 2024 Braaay – CNPJ:
				50.260.091/0001-72. • CEP: 05411-000. Todos os direitos reservados. Conheça nossas:
				<a href="/" class="text-black font-medium">Trocas e devoluções</a>
				|
				<a href="/" class="text-black font-medium">*Frete Grátis: Confira as regras</a>
			</p>
			<!-- Locales -->
			<div class="text-center my-2">
				{#if locales}
					{#each locales as locale, i}
						<button
							type="button"
							onclick={() => redirectLocale(locale)}
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
	</div>
</footer>
