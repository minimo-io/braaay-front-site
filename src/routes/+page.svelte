<script lang="ts">
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import Meta from '$components/layout/Meta.svelte';
	import SchemaHomepage from '$components/layout/Schemas/SchemaHomepage.svelte';
	import Carrousel from '$components/ui/Carrousel.svelte';
	import CountryBox from '$components/ui/CountryBox.svelte';
	import PartnersList from '$components/ui/PartnersList.svelte';
	import PresenteSlide from '$components/ui/PresenteSlide.svelte';
	import TitleSection from '$components/ui/TitleSection.svelte';
	import Button from '$components/ui/buttons/Button.svelte';
	import SectionDivider from '$components/ui/dividers/SectionDivider.svelte';
	import WineBox from '$components/ui/products/WineBox.svelte';
	import { AppConfig } from '$config';
	import { HomeProducts } from '$data/home-products.data';
	import { allCountries } from '$lib/data/countries.data';
	import popularProducts from '$lib/data/jsons/popular-products.json';
	import { m } from '$lib/paraglide/messages';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import LatestBlogSection from '$components/ui/blog/LatestBlogSection.svelte';

	import { Calendar, ChefHat, MapPin } from '@lucide/svelte';

	let pageCountries = $state(allCountries[getLocale()]);
	let mostPopularProducts = $state(popularProducts[getLocale()]);

	let pageLocale = $state(getLocale());
	let homeProducts = HomeProducts(pageLocale);
</script>

{#snippet partnersSection()}
	<div>
		<TitleSection
			title={m.partnersTitle()}
			subTitle={m.partnersSubtitle()}
			description={m.partnersDescription()}
		>
			<!-- {#snippet button()}
				<Button
					title="Ver todos"
					size="md"
					type="sun"
					action={() => launchToast(m.soon(), 'info', 2000)}
				/>
			{/snippet} -->
		</TitleSection>

		<PartnersList />
	</div>
{/snippet}

{#snippet blogSection()}
	<div>
		<TitleSection
			title={m.blogSectionTitle()}
			subTitle={m.blogSectionSubtitle()}
			description={m.partnersDescription()}
		>
			{#snippet button()}
				<Button title={m.goToBlog()} size="md" type="sun" url={localizeHref('/blog/')} />
			{/snippet}
		</TitleSection>

		<LatestBlogSection />
	</div>
{/snippet}

<!-- {#snippet brandSection()}

{/if} -->

<Meta
	title="{m.seoBase()} {m.seoDivider()} {m.seoHomeTitle()}"
	description={m.seoHomeDescription()}
/>

<SchemaHomepage />

<main>
	<Carrousel />

	<div class="my-5">
		<!-- Partners section on top on uy -->
		{#if pageLocale == 'uy'}
			{@render partnersSection()}
		{/if}

		{#if pageLocale == 'pt'}
			<!-- Brand section -->
			<TitleSection
				title="Vinhos & Encontros"
				subTitle="Showroom"
				description="Seu próximo vinho, espumante ou evento privado com curadoría da nossa sommelier. Somos especialistas no melhor de 🇺🇾 Uruguai, do 🇧🇷 Brasil e do Mundo. Visite nosso showroom; venha descobrir o inesperado!"
			>
				{#snippet button()}
					<div
						class="mt-2 md:mt-0 flex flex-row md:flex-col gap-2 md:top-7 relative items-end scale-95 md:scale-100 -left-[3%] md:-left-0"
					>
						<div class="">
							<Button
								title="Reserve o espaço"
								size="md"
								type="sun"
								url={AppConfig.whatsappLink}
								newTab
							>
								{#snippet icon()}
									<div class="hidden md:block">
										<Calendar class="lucide-button" />
									</div>
								{/snippet}
							</Button>
						</div>

						<div class="w-fit">
							<Button title="Onde fica?" size="md" type="blue" url={AppConfig.mapLink} newTab>
								{#snippet icon()}
									<MapPin class="lucide-button" />
								{/snippet}
							</Button>
						</div>
					</div>
				{/snippet}
			</TitleSection>
		{/if}
	</div>

	<!-- Home images -->
	{#if pageLocale == 'pt'}
		<div class="max-w-screen-lg-2x mx-[30px] lg:mx-auto items-center flex justify-between">
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
				<!-- Image 1 with play button overlay -->
				<div class="relative">
					<img
						src="/images/home-video-braaay-erika.png"
						alt="1 description"
						class="rounded-lg w-full h-auto"
					/>
					<a
						href="https://www.instagram.com/reel/DDLCPIdPzql/"
						target="_blank"
						rel="nofollow noopener"
						class="play-button not-hover-effect"
						aria-label="play-button"
						role="button"
					>
						<span>&nbsp;</span>
					</a>
				</div>

				<!-- Image 2 -->
				<div>
					<img
						src="/images/home-braaay-2-2.webp"
						alt="2 description"
						class="rounded-lg w-full h-auto"
					/>
				</div>

				<!-- Image 3 -->
				<div>
					<img
						src="/images/braaay-homepage-3.webp"
						alt=" 3 description"
						class="rounded-lg w-full h-auto"
					/>
				</div>

				<!-- Image 4 -->
				<PresenteSlide />
			</div>
		</div>
	{/if}

	<!-- Section with white background and divider -->
	<section class="relative bg-white pb-4 md:py-8 mt-14">
		<SectionDivider color="green" />

		<TitleSection
			title={m.newsSectionTitle()}
			subTitle="E-Commerce"
			description={m.newsSectionDescription()}
		>
			{#snippet button()}
				{#if pageLocale == 'pt'}
					<Button title="Ver todos" size="md" type="sun" url={localizeHref('/vinhos/')} />
				{:else}
					<Button title="Ver todas" size="md" type="sun" url={localizeHref('/uy/cervezas/')} />
				{/if}
			{/snippet}
		</TitleSection>

		<!-- Wine list -->
		<section class="bg-white max-w-screen-lg-2x py-10 mx-[20px] lg:mx-auto">
			<div class="bry-product-list">
				<!-- Wines -->
				{#if homeProducts?.products}
					{#each homeProducts.products as product, i (i)}
						<WineBox
							image={{
								src: product.image.src
							}}
							wine={{
								title: product.title,
								price: product.price,
								regularPrice: product.regularPrice,
								url: product.url,
								score: product.score,
								isFavorited: false,
								productId: 0
							}}
							discount=""
							hideFavs={true}
						/>
					{/each}
				{/if}

				<!-- Kits -->
				{#if homeProducts?.kits}
					{#each homeProducts.kits as product, i (i)}
						<WineBox
							image={{
								src: product.image.src
							}}
							wine={{
								title: product.title,
								price: product.price,
								regularPrice: product.regularPrice,
								url: product.url,
								score: product.score,
								isFavorited: false,
								productId: 0
							}}
							discount=""
							hideFavs={true}
						/>
					{/each}
				{/if}
			</div>
		</section>

		{#if pageCountries.length > 0}
			<!-- Header section: Paises -->
			<TitleSection
				title="Vinhos por País"
				subTitle="E-Commerce"
				description="Somos especialistas no melhores vinhos de Uruguai e do Brasil mas a BRAAAY vai além, desde o melhor em vinhos Italianos, até Chilenos, Argentinos e Portugueses."
			/>

			<section class="bg-white max-w-screen-lg-2x py-5 md:py-0 mx-[20px] lg:mx-auto">
				<div class="flex !flex-row justify-evenly gap-8 overflow-x-auto whitespace-nowrap">
					{#each pageCountries as country}
						<CountryBox {country} />
					{/each}
				</div>
			</section>
		{/if}

		<!-- Header section: Popular products -->
		{#if mostPopularProducts.length > 0 && pageLocale == 'pt'}
			<TitleSection
				title="Os Queridinhos"
				subTitle="Oportunidades"
				description="Confira os custo-benefício que estão fazendo sucesso! Vinhos, presentes e kits que nossos clientes mais amam."
			/>
			<section class="bg-white max-w-screen-lg-2x py-10 mx-[20px] lg:mx-auto">
				<div class="bry-product-list">
					{#each mostPopularProducts.slice(0, 10) as product, i (i)}
						<WineBox
							image={{ src: product.image.src, alt: product.image.alt }}
							wine={{
								productId: product.id,
								title: product.title,
								price: product.price ?? '',
								regularPrice: product.regularPrice ?? '',
								url: localizeHref(product.url),
								score: ''
							}}
						/>
					{/each}
				</div>
			</section>
		{/if}

		<!-- Header section: Harmonizacoes -->
		{#if pageLocale == 'pt'}
			<TitleSection
				title="Harmonizações"
				subTitle="Revista"
				description="Acompanhe aqui uma seleção dos nossos melhores vinhos e espumantes uruguaios e brasileiros
			para harmonizar com seus pratos favoritos."
			>
				{#snippet button()}
					<Button title="Ver todas" size="md" type="sun" url="/">
						{#snippet icon()}
							<ChefHat class="lucide-button" />
						{/snippet}
					</Button>
				{/snippet}
			</TitleSection>

			<!-- Harmonizacoes -->
			<div class="max-w-screen-lg-2x mx-[30px] my-10 lg:mx-auto items-center flex justify-between">
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
					<!-- Image 1 with play button overlay -->
					<div class="relative">
						<a title="Carnes vermelhas" href="/harmonizacoes/carnes-vermelhas/">
							<img
								src="/images/harmonizacoes/carnes-vermelhas-2.jpeg"
								alt="1 description"
								class="rounded-lg w-full h-auto"
							/>
						</a>
					</div>

					<!-- Image 2 -->
					<div>
						<a title="Vegetariano" href="/harmonizacoes/vegetariano/">
							<img
								src="/images/harmonizacoes/harmonizacoes-vegetariano.jpeg"
								alt="2 description"
								class="rounded-lg w-full h-auto"
							/>
						</a>
					</div>

					<!-- Image 3 -->
					<div>
						<a title="Culinaria japonesa" href="/harmonizacoes/culinaria-japonesa/">
							<img
								src="/images/harmonizacoes/culinaria-japonesa-2.webp"
								alt="3 description"
								class="rounded-lg w-full h-auto"
							/>
						</a>
					</div>

					<!-- Image 4 -->
					<div>
						<a title="Culinaria japonesa" href="/harmonizacoes/carnes-brancas/">
							<img
								src="/images/harmonizacoes/harmonizacao-carnes-brancas.webp"
								alt="4 description"
								class="rounded-lg w-full h-auto"
							/>
						</a>
					</div>
				</div>
			</div>
		{/if}

		<!-- Header section: Parceiros -->
		{#if pageLocale == 'pt'}
			{@render partnersSection()}
		{/if}

		{#if pageLocale == 'uy'}
			{@render blogSection()}
		{/if}
	</section>
</main>

<FunMessageSection />
