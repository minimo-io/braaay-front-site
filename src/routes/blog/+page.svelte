<script>
	import SectionDivider from '$components/ui/dividers/SectionDivider.svelte';
	import BlogHeader from '$components/ui/headers/BlogHeader.svelte';
	import TitleSection from '$components/ui/TitleSection.svelte';
	import { ChefHat } from 'lucide-svelte';
</script>

<main class="w-full mx-auto">
	<BlogHeader />
</main>

<!-- Section with white background and divider -->
<section class="relative bg-white py-3 mt-10">
	<SectionDivider color="green" />
	<!-- Articles grid -->
	<div class="max-w-screen-lg mx-auto my-5 px-[30px]">
		<div class="max-w-full">
			<div class="mb-5">
				<TitleSection
					buttonText="Harmonizações"
					title="ÚLTIMOS ARTIGOS"
					description="Fique por dentro das tendências, dicas de harmonização, entrevistas, curiosidades e accesórios sobre vinhos!"
				>
					{#snippet icon()}
						<ChefHat class="lucide-button" />
					{/snippet}
				</TitleSection>
			</div>

			<!-- Grid Container -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<!-- Card -->
				<div class="bg-white rounded-lg shadow overflow-hidden">
					<div class="relative">
						<img src="/images/blog-2.png" alt="Article" class="w-full h-48 object-cover" />
						<a
							href="/article"
							class="absolute top-2 right-2 rounded-full p-2 shadow"
							aria-label="Article"
						>
							<i data-lucide="zoom-in" class="text-white"></i>
						</a>
					</div>
					<div class="p-5">
						<div class="text-sm text-grey-medium font-light mb-2 flex items-center">
							<img
								src="./images/erika-96x96.jpeg"
								alt="Author Avatar"
								class="w-6 h-6 rounded-full mr-2"
							/>
							Erika Bezerra • 12 de agosto 2024
						</div>
						<h3 class="text-lg font-prata font-normal my-2">
							<a href="/article" class="hover:text-red-600">RECEITA DE GELEIA DE VINHO</a>
						</h3>

						<div class="text-sm mt-2">
							<a href="/article" class="font-bold text-sun">Dica do Chef</a>
							<span class="text-grey-medium-dark">•</span>
							<span class="text-sm font-light text-grey-medium my-2"> Leitura em 6 min </span>
						</div>
					</div>
				</div>

				<!-- Card -->
				<div class="bg-white rounded-lg shadow overflow-hidden">
					<div class="relative">
						<img src="/images/blog-3.png" alt="Article" class="w-full h-48 object-cover" />
						<a
							href="/article"
							class="absolute top-2 right-2 rounded-full p-2 shadow"
							aria-label="Article"
						>
							<i data-lucide="zoom-in" class="text-white"></i>
						</a>
					</div>
					<div class="p-5">
						<div class="text-sm text-grey-medium font-light mb-2 flex items-center">
							<img
								src="./images/erika-96x96.jpeg"
								alt="Author Avatar"
								class="w-6 h-6 rounded-full mr-2"
							/>
							Erika Bezerra • 12 de agosto 2024
						</div>
						<h3 class="text-lg font-prata font-normal my-2">
							<a href="/article" class="hover:text-red-600">RECEITA DE GELEIA DE VINHO</a>
						</h3>
						<div class="text-sm mt-2">
							<a href="./article" class="font-bold text-sun">Dica do Chef</a>
							<span class="text-grey-medium-dark">•</span>
							<span class="text-sm font-light text-grey-medium my-2"> Leitura em 6 min </span>
						</div>
					</div>
				</div>

				<!-- Card -->
				<div class="bg-white rounded-lg shadow overflow-hidden">
					<div class="relative">
						<img src="/images/blog-4.png" alt="Article" class="w-full h-48 object-cover" />
						<a
							href="/article"
							class="absolute top-2 right-2 rounded-full p-2 shadow"
							aria-label="Article"
						>
							<i data-lucide="zoom-in" class="text-white"></i>
						</a>
					</div>
					<div class="p-5">
						<div class="text-sm text-grey-medium font-light mb-2 flex items-center">
							<img
								src="./images/erika-96x96.jpeg"
								alt="Author Avatar"
								class="w-6 h-6 rounded-full mr-2"
							/>
							Erika Bezerra • 12 de agosto 2024
						</div>
						<h3 class="text-lg font-prata font-normal my-2">
							<a href="/article" class="hover:text-red-600">RECEITA DE GELEIA DE VINHO</a>
						</h3>
						<div class="text-sm mt-2">
							<a href="/article" class="font-bold text-sun">Dica do Chef</a>
							<span class="text-grey-medium-dark">•</span>
							<span class="text-sm font-light text-grey-medium my-2"> Leitura em 6 min </span>
						</div>
					</div>
				</div>

				<!-- Card -->
				<div class="bg-white rounded-lg shadow overflow-hidden">
					<div class="relative">
						<img src="/images/blog-5.png" alt="Article" class="w-full h-48 object-cover" />
						<a
							href="/article"
							class="absolute top-2 right-2 rounded-full p-2 shadow"
							aria-label="Article"
						>
							<i data-lucide="zoom-in" class="text-white"></i>
						</a>
					</div>
					<div class="p-5">
						<div class="text-sm text-grey-medium font-light mb-2 flex items-center">
							<img
								src="./images/erika-96x96.jpeg"
								alt="Author Avatar"
								class="w-6 h-6 rounded-full mr-2"
							/>
							Erika Bezerra • 12 de agosto 2024
						</div>
						<h3 class="text-lg font-prata font-normal my-2">
							<a href="/article" class="hover:text-red-600">RECEITA DE GELEIA DE VINHO</a>
						</h3>
						<div class="text-sm mt-2">
							<a href="/article" class="font-bold text-sun">Dica do Chef</a>
							<span class="text-grey-medium-dark">•</span>
							<span class="text-sm font-light text-grey-medium my-2"> Leitura em 6 min </span>
						</div>
					</div>
				</div>

				<!-- Duplicate the above Card structure for additional cards -->
			</div>
		</div>
	</div>
</section>
