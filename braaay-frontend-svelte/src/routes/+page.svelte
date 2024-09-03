<script lang="ts">
	import { PUBLIC_API_BACKEND_URL } from '$env/static/public';
	export let data;

	const { posts } = data.posts;

	console.log(PUBLIC_API_BACKEND_URL);
</script>

<svelte:head>
	<title>{'Blog - Braaay'}</title>
</svelte:head>
<p>{PUBLIC_API_BACKEND_URL}</p>
{#each posts.nodes as item}
	<strong>{item.title}</strong>
	{@html item.excerpt}
{/each}
