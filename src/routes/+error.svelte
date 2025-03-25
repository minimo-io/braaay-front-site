<script lang="ts">
	import { page } from '$app/state';
	import { localizeHref } from '$lib/paraglide/runtime';

	let props = $props();
</script>

<div class="error-container">
	<h1>{page.status}</h1>
	{#if page.error}
		<p>{page.error.message}</p>
	{/if}

	{#if page.status === 404}
		<p>The page you are looking for does not exist babay!</p>
	{/if}
	<a href={localizeHref('/')}>Return to home</a>
</div>

<style>
	.error-container {
		text-align: center;
		padding: 2rem;
	}
	h1 {
		font-size: 4rem;
		margin-bottom: 1rem;
	}
	p {
		font-size: 1.25rem;
	}
</style>
