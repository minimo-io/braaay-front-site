<script lang="ts">
	import Carrousel from '$components/ui/Carrousel.svelte';
	import CountryBox from '$components/ui/CountryBox.svelte';
	import PartnersList from '$components/ui/PartnersList.svelte';
	import TitleSection from '$components/ui/TitleSection.svelte';
	import Button from '$components/ui/buttons/Button.svelte';
	import SectionDivider from '$components/ui/dividers/SectionDivider.svelte';
	import WineBox from '$components/ui/products/WineBox.svelte';
	import type { Country, ImageGeneral } from '$lib/types';

	import { Calendar, ChefHat } from '@lucide/svelte';

	let countries: Country[] = [
		{
			url: '/pais/uruguai/',
			isBold: true,
			flag: {
				url: '/images/flags/uruguay.png',
				altText: 'Uruguai'
			} as ImageGeneral
		} as Country,
		{
			url: '/pais/brasil/',
			isBold: true,
			flag: {
				url: '/images/flags/brazil.png',
				altText: 'Brasil'
			} as ImageGeneral
		} as Country,
		{
			url: '/pais/chile/',
			flag: {
				url: '/images/flags/chile.png',
				altText: 'Chile'
			} as ImageGeneral
		} as Country,
		{
			url: '/pais/argentina/',
			flag: {
				url: '/images/flags/argentina.png',
				altText: 'Argentina'
			} as ImageGeneral
		} as Country,
		{
			url: '/pais/portugal/',
			flag: {
				url: '/images/flags/portugal.png',
				altText: 'Portugal'
			} as ImageGeneral
		} as Country,
		{
			url: '/pais/italia/',
			flag: {
				url: '/images/flags/italy.png',
				altText: 'Italia'
			} as ImageGeneral
		} as Country
	];
</script>

<svelte:head>
	<title>Braaay - 🍷Vinhos boutique e Orgânicos & 🍻Cervejas locais</title>
	<meta
		name="description"
		content="Para quem aprecia vinhos autênticos, culturas e experiências enriquecedoras. Especialistas em vinhos uruguaios, nacionais & kits e presentes."
	/>
</svelte:head>

<main>
	<Carrousel />

	<div class="my-5">
		<TitleSection
			title="Vinhos & Encontros"
			subTitle="Showroom"
			description="Seu próximo vinho, espumante ou evento privado com curadoría da nossa sommelier. Somos especialistas no melhor de 🇺🇾 Uruguai, do 🇧🇷 Brasil e do Mundo. Visite nosso showroom; venha descobrir o inesperado!"
		>
			{#snippet button()}
				<Button title="Reserve o espaço / Consulte" size="md" type="sun" url="/experiencias">
					{#snippet icon()}
						<Calendar class="lucide-button" />
					{/snippet}
				</Button>
			{/snippet}
		</TitleSection>
	</div>

	<!-- Home images -->
	<div class="max-w-screen-lg-2x mx-[30px] lg:mx-auto items-center flex justify-between">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
			<!-- Image 1 with play button overlay -->
			<div class="relative">
				<img
					src="/images/home-video-braaay-erika.png"
					alt="1 description"
					class="rounded-lg w-full h-auto"
				/>
				<a href="/" class="play-button not-hover-effect" aria-label="play-button" role="button">
					<span></span>
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
			<div>
				<img
					src="/images/home-braaay-4-2.webp"
					alt=" 4 description"
					class="rounded-lg w-full h-auto"
				/>
			</div>
		</div>
	</div>

	<!-- Section with white background and divider -->
	<section class="relative bg-white py-10 mt-14">
		<SectionDivider color="green" />

		<TitleSection
			title="Vinhos & Presentes"
			subTitle="E-Commerce"
			description="Dê uma olhada em nossa seleção com os melhores vinhos uruguaios e brasileiros e nossas
			sugestões para presentes empresariais."
		>
			{#snippet button()}
				<Button title="Ver todos" size="md" type="sun" url="/category" />
			{/snippet}
		</TitleSection>

		<!-- Wine list -->
		<section class="bg-white max-w-screen-lg-2x py-10 mx-[20px] lg:mx-auto">
			<div class="bry-product-list">
				<!-- Wine Box 0 -->
				<WineBox
					image={{
						src: '/images/wines/vinho-don-pascual-tannat-merlot.webp'
					}}
					wine={{
						title: 'Don Pascual Cabernet Franc',
						price: '150.0',
						url: '/produto/vinho-familia-deicas-massimo-tannat/',
						score: '4.5'
					}}
				/>

				<!-- Wine Box 1 -->
				<WineBox
					image={{
						src: '/images/wines/Deica-2-1.webp'
					}}
					wine={{
						title: 'Pizzato Merlot de Merlots 2022',
						price: '150.0',
						url: '/produto/vinho-familia-deicas-massimo-tannat/',
						score: '4.5'
					}}
				/>

				<!-- Wine Box 2 -->
				<WineBox
					image={{
						src: '/images/wines/PIZZATO-concentus.webp'
					}}
					wine={{
						title: 'Artesana Cabernet Franc/Merlot Reserva',
						price: '100.0',
						url: '/produto/vinho-familia-deicas-massimo-tannat/',
						score: '4.5'
					}}
				/>

				<!-- Wine Box 3 -->
				<WineBox
					image={{
						src: '/images/wines/Pizzato-Legno-Chardonnay.webp'
					}}
					wine={{
						title: 'Pizzato Chardonnay de Chardonnays',
						price: '119.0',
						url: '/produto/vinho-familia-deicas-massimo-tannat/',
						score: '4.5'
					}}
				/>

				<!-- Wine Box 4 -->
				<WineBox
					image={{
						src: '/images/wines/vinho-don-pascual-cabernet-merlot.webp'
					}}
					wine={{
						title: 'Mayos Jovem Branco da Basso',
						price: '43.0',
						url: '/produto/vinho-familia-deicas-massimo-tannat/',
						score: '4.5'
					}}
				/>

				<!-- Wine Box 6 (with discount) -->
				<WineBox
					image={{
						src: '/images/wines/vinho-mayos-jovem-branco.webp',
						alt: 'Artesana Cabernet Franc/Merlot Reserva'
					}}
					wine={{
						title: 'Artesana Cabernet Franc/Merlot Reserva',
						price: '100.0',
						url: '/produto/vinho-familia-deicas-massimo-tannat/',
						score: '4.5'
					}}
					discount={'50%'}
				/>
			</div>
		</section>

		<!-- Header section: Paises -->
		<TitleSection
			title="Vinhos por País"
			subTitle="E-Commerce"
			description="Somos especialistas no melhores vinhos de Uruguai e do Brasil mas a BRAAAY vai além, desde o melhor em vinhos Italianos, até Chilenos, Argentinos e Portugueses."
		/>

		<section class="bg-white max-w-screen-lg-2x py-5 md:py-0 mx-[20px] lg:mx-auto">
			<div class="flex !flex-row justify-evenly gap-8 overflow-x-auto whitespace-nowrap">
				{#each countries as country}
					<CountryBox {country} />
				{/each}
			</div>
		</section>

		<!-- Header section: Harmonizacoes -->
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
							src="/images/harmonizacoes/carnes-vermelhas-2.webp"
							alt="1 description"
							class="rounded-lg w-full h-auto"
						/>
					</a>
				</div>

				<!-- Image 2 -->
				<div>
					<a title="Vegetariano" href="/harmonizacoes/vegetariano/">
						<img
							src="/images/harmonizacoes/harmonizacoes-vegetariano.png"
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

		<!-- Header section: Parceiros -->

		<TitleSection
			title="Parceiros destacados"
			subTitle="Produtores"
			description="	Os melhores produtores do Uruguai e do Brasil estão na Braaay compartilhando suas
			experiências."
		>
			{#snippet button()}
				<Button title="Ver todos" size="md" type="sun" url="/"></Button>
			{/snippet}
		</TitleSection>

		<PartnersList />
	</section>
</main>

<style>
</style>
