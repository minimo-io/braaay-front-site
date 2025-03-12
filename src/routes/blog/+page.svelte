<script lang="ts">
	import ArticleCard from '$components/ui/articles/components/ArticleCard.svelte';
	import SectionDivider from '$components/ui/dividers/SectionDivider.svelte';
	import BlogHeader from '$components/ui/headers/BlogHeader.svelte';
	import TitleSection from '$components/ui/TitleSection.svelte';
	import { ChefHat } from 'lucide-svelte';
	import Button from '$components/ui/buttons/Button.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="w-full mx-auto">
	<BlogHeader />
</main>

{#if data.posts && data.posts.length > 0}
	<ul>
		{#each data.posts as post (post.id)}
			<li>
				<h2>{post.title}</h2>
				<p>{new Date(post.date).toLocaleDateString()}</p>
			</li>
		{/each}
	</ul>
{:else}
	<p>No posts available.</p>
{/if}

<!-- Section with white background and divider -->
<section class="relative bg-white py-3 mt-10">
	<SectionDivider color="green" />
	<!-- Articles grid -->
	<div class="max-w-screen-lg mx-auto my-5 px-[30px]">
		<div class="max-w-full">
			<div class="mb-5">
				<TitleSection
					title="ÚLTIMOS ARTIGOS"
					description="Fique por dentro das tendências, dicas de harmonização, entrevistas, curiosidades e accesórios sobre vinhos!"
				>
					{#snippet button()}
						<Button title="Ver todas" size="md" type="sun" url="/">
							{#snippet icon()}
								<ChefHat class="lucide-button" />
							{/snippet}
						</Button>
					{/snippet}
				</TitleSection>
			</div>

			<!-- Grid Container -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<!-- Article -->
				<ArticleCard
					url="/article"
					image="/images/blog-2.png"
					title="RECEITA DE frango assado"
					date="12 de agosto 2024"
					author={{ name: 'Erika Bezerra', image: '/images/erika-96x96.jpeg' }}
					readingTime="Leitura em 6 min"
					category={{ url: '/article', title: 'Dica do Chef' }}
				/>

				<!-- Article -->
				<ArticleCard
					url="/article"
					image="/images/blog-3.png"
					title="RECEITA DE galeia do vinho"
					date="12 de agosto 2024"
					author={{ name: 'Erika Bezerra', image: '/images/erika-96x96.jpeg' }}
					readingTime="Leitura em 6 min"
					category={{ url: '/article', title: 'Dica do Chef' }}
				/>

				<!-- Article -->
				<ArticleCard
					url="/article"
					image="/images/blog-4.png"
					title="RECEITA DE frango assado com batatas a brasileira"
					date="12 de agosto 2024"
					author={{ name: 'Erika Bezerra', image: '/images/erika-96x96.jpeg' }}
					readingTime="Leitura em 6 min"
					category={{ url: '/article', title: 'Dica do Chef' }}
				/>

				<!-- Article -->
				<ArticleCard
					url="/article"
					image="/images/blog-5.png"
					title="Baita pizza que só pode ser comida por professionais"
					date="12 de agosto 2024"
					author={{ name: 'Erika Bezerra', image: '/images/erika-96x96.jpeg' }}
					readingTime="Leitura em 6 min"
					category={{ url: '/article', title: 'Dica do Chef' }}
				/>
			</div>
		</div>
	</div>
</section>
