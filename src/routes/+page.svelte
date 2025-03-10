<script lang="ts">
	import Carrousel from '$components/ui/Carrousel.svelte';
	import TitleSection from '$components/ui/TitleSection.svelte';
	import SectionDivider from '$components/ui/dividers/SectionDivider.svelte';
	import WineBox from '$components/ui/products/WineBox.svelte';

	import { Calendar, ChefHat } from 'lucide-svelte';
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
			buttonText="Reserve sua experiência"
			title="Encontros & Jantares"
			subTitle="Showroom"
			description="Venha descobrir o inesperado em nosso showroom e prepare-se para eventos inesquecíveis."
		>
			{#snippet icon()}
				<Calendar class="lucide-button" />
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
			buttonText="Ver todos"
			title="Vinhos & Presentes"
			subTitle="E-Commerce"
			description="Dê uma olhada em nossa seleção com os melhores vinhos uruguaios e brasileiros e nossas
			sugestões para presentes empresariais."
		></TitleSection>

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
						price: 150.0,
						url: '/product',
						score: 4.5
					}}
				/>

				<!-- Wine Box 1 -->
				<WineBox
					image={{
						src: '/images/wines/Deica-2-1.webp'
					}}
					wine={{
						title: 'Pizzato Merlot de Merlots 2022',
						price: 150.0,
						url: '/product',
						score: 4.5
					}}
				/>

				<!-- Wine Box 2 -->
				<WineBox
					image={{
						src: './images/wines/PIZZATO-concentus.webp'
					}}
					wine={{
						title: 'Artesana Cabernet Franc/Merlot Reserva',
						price: 100.0,
						url: '/',
						score: 4.5
					}}
				/>

				<!-- Wine Box 3 -->
				<WineBox
					image={{
						src: './images/wines/Pizzato-Legno-Chardonnay.webp'
					}}
					wine={{
						title: 'Pizzato Chardonnay de Chardonnays',
						price: 119.0,
						url: '/',
						score: 4.5
					}}
				/>

				<!-- Wine Box 4 -->
				<WineBox
					image={{
						src: './images/wines/vinho-don-pascual-cabernet-merlot.webp'
					}}
					wine={{
						title: 'Mayos Jovem Branco da Basso',
						price: 43.0,
						url: '/',
						score: 4.5
					}}
				/>

				<!-- Wine Box 6 (with discount) -->
				<WineBox
					image={{
						src: './images/wines/vinho-mayos-jovem-branco.webp',
						alt: 'Artesana Cabernet Franc/Merlot Reserva'
					}}
					wine={{
						title: 'Artesana Cabernet Franc/Merlot Reserva',
						price: 100.0,
						url: '/',
						score: 4.5
					}}
					discount={'50%'}
				/>
			</div>
		</section>

		<!-- Header section: Harmonizacoes -->
		<TitleSection
			buttonText="Ver todas"
			title="Harmonizações"
			subTitle="Revista"
			description="Acompanhe aqui uma seleção dos nossos melhores vinhos e espumantes uruguaios e brasileiros
			para harmonizar com seus pratos favoritos."
		>
			{#snippet icon()}
				<ChefHat class="lucide-button" />
			{/snippet}
		</TitleSection>

		<!-- Harmonizacoes -->
		<div class="max-w-screen-lg-2x mx-[30px] my-10 lg:mx-auto items-center flex justify-between">
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
				<!-- Image 1 with play button overlay -->
				<div class="relative">
					<img
						src="/images/harmonizacoes/carnes-vermelhas-2.webp"
						alt="1 description"
						class="rounded-lg w-full h-auto"
					/>
				</div>

				<!-- Image 2 -->
				<div>
					<img
						src="/images/harmonizacoes/harmonizacoes-vegetariano.png"
						alt="2 description"
						class="rounded-lg w-full h-auto"
					/>
				</div>

				<!-- Image 3 -->
				<div>
					<img
						src="/images/harmonizacoes/culinaria-japonesa-2.webp"
						alt="3 description"
						class="rounded-lg w-full h-auto"
					/>
				</div>

				<!-- Image 4 -->
				<div>
					<img
						src="/images/harmonizacoes/harmonizacao-carnes-brancas.webp"
						alt="4 description"
						class="rounded-lg w-full h-auto"
					/>
				</div>
			</div>
		</div>

		<!-- Header section: Parceiros -->

		<TitleSection
			buttonText="Ver todos"
			title="Parceiros destacados"
			subTitle="Produtores"
			description="	Os melhores produtores do Uruguai e do Brasil estão na Braaay compartilhando suas
			experiências."
		></TitleSection>

		<section class="bry-partners-list">
			<div>
				<a href="/">
					<img
						src="/images/partners/vina-eden-logo.webp"
						alt="Viña Edén"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/artesana-logo-3.webp"
						alt="Artesana"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/capoani-logo-3.webp"
						alt="Manus Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/cerro-del-toro-logo-2.webp"
						alt="AC Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/don-pascual-logo-2.webp"
						alt="Coroa Acheira Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/familia-deicas-uruguai.webp"
						alt="Pizzato Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/pizzato-logo.webp"
						alt="Casa Eva Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/vinicola-manus-logo.webp"
						alt="Anina Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/garzon-logo-2.webp"
						alt="Anina Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/giaretta-logo-2.webp"
						alt="Anina Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/casa-eva-logo-2.webp"
						alt="Anina Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/casa-da-coheleira-logo-3.webp"
						alt="Anina Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
		</section>
	</section>
</main>

<style>
</style>
