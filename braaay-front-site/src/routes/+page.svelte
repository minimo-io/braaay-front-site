<script lang="ts">
	import Carrousel from '$components/ui/Carrousel.svelte';
	import TitleSection from '$components/ui/TitleSection.svelte';

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
		<!-- SVG Divider Dot -->
		<div class="absolute inset-x-0 -top-3 flex justify-center">
			<img
				src="/images/divider-green.svg"
				width="23px"
				height="23px"
				alt="divider"
				class="w-[20px] h-[20px] lg:w-[23px] lg:h-[23px]"
			/>
		</div>

		<TitleSection
			buttonText="Ver todos"
			title="Vinhos & Presentes"
			subTitle="E-Commerce"
			description="Dê uma olhada em nossa seleção com os melhores vinhos uruguaios e brasileiros e nossas
			sugestões para presentes empresariais."
		></TitleSection>

		<!-- Wine list -->
		<section class="bg-white max-w-screen-lg-2x py-12 mx-[20px] lg:mx-auto">
			<div class="bry-product-list">
				<!-- Wine Box 1 -->
				<div class="wine">
					<div class="mb-3 flex-grow">
						<img
							src="/images/wines/Deica-2-1.webp"
							alt="Pizzato Merlot de Merlots 2022"
							class="mx-auto"
						/>
					</div>
					<div class="absolute top-4 left-4">
						<div class="wine-stars">
							<span>★</span>
							4.5
						</div>
					</div>
					<h5 class="wine-title">Pizzato Merlot de Merlots 2022</h5>
					<p class="wine-price">R$ 150</p>
					<a href="./product.html" class="wine-button">VER DETALHES</a>
				</div>

				<!-- Wine Box 2 -->
				<div class="wine">
					<div class="mb-3 flex-grow">
						<img
							src="/images/wines/PIZZATO-concentus.webp"
							alt="Artesana Cabernet Franc/Merlot Reserva"
							class="mx-auto"
						/>
					</div>
					<div class="absolute top-4 left-4">
						<div class="wine-stars">
							<span>★</span>
							4.5
						</div>
					</div>
					<h5 class="wine-title">Artesana Cabernet Franc/Merlot Reserva</h5>
					<p class="wine-price">R$ 100</p>
					<a href="/" class="wine-button">VER DETALHES</a>
				</div>

				<!-- Wine Box 3 -->
				<div class="wine">
					<div class="mb-3 flex-grow">
						<img
							src="/images/wines/Pizzato-Legno-Chardonnay.webp"
							alt="Pizzato Chardonnay de Chardonnays"
							class="mx-auto"
						/>
					</div>
					<div class="absolute top-4 left-4">
						<div class="wine-stars">
							<span>★</span>
							4.5
						</div>
					</div>
					<h5 class="wine-title">Pizzato Chardonnay de Chardonnays</h5>
					<p class="wine-price">R$ 119</p>
					<a href="/" class="wine-button">VER DETALHES</a>
				</div>

				<!-- Wine Box 4 -->
				<div class="wine">
					<div class="mb-3 flex-grow">
						<img
							src="/images/wines/vinho-don-pascual-cabernet-merlot.webp"
							alt="Mayos Jovem Branco da Basso"
							class="mx-auto"
						/>
					</div>
					<div class="absolute top-4 left-4">
						<div class="wine-stars">
							<span>★</span>
							4.5
						</div>
					</div>
					<h5 class="wine-title">Mayos Jovem Branco da Basso</h5>
					<p class="wine-price">R$ 43</p>
					<a href="/" class="wine-button">VER DETALHES</a>
				</div>

				<!-- Wine Box 5 (with discount) -->
				<div class="wine">
					<div class="mb-3 flex-grow">
						<img
							src="/images/wines/vinho-mayos-jovem-branco.webp"
							alt="Artesana Cabernet Franc/Merlot Reserva"
							class="mx-auto"
						/>
					</div>
					<div class="absolute top-4 left-4">
						<div class="wine-stars">
							<span>★</span>
							4.5
						</div>
					</div>
					<h5 class="wine-title">Artesana Cabernet Franc/Merlot Reserva</h5>
					<p class="wine-price">R$ 100</p>
					<a href="/" class="wine-button">VER DETALHES</a>
					<div class="absolute top-4 right-4 bg-black text-white px-2 py-1 text-xs rounded-lg">
						55% OFF
					</div>
				</div>
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
		<div
			class="max-w-screen-lg-2x mx-[30px] mt-12 mb-5 lg:mx-auto items-center flex justify-between"
		>
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
