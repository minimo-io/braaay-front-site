<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';

	let props = $props();

	// Mensagens específicas por código de erro
	const errorMessages = {
		404: m.Error404Title(),
		500: m.Error500Title()
	};

	const errorTitle = $derived(errorMessages[page.status] || 'Erro');

	function goBack() {
		if (browser && window.history.length > 1) {
			window.history.back();
		} else {
			goto(localizeHref('/'));
		}
	}
</script>

<svelte:head>
	<title>{errorTitle} - {page.status} - {m.seoBase()}</title>
</svelte:head>

<div class="min-h-full flex items-center justify-center p-8 bg-gray-50">
	<div class="text-center p-12 rounded-xl max-w-md w-full">
		<h1 class="text-8xl font-black mb-4 text-red-500">{page.status}</h1>
		<h2 class="text-3xl font-semibold mb-4 text-gray-800">{errorTitle}</h2>
		<p class="text-base text-grey-medium-dark mb-8 leading-relaxed">
			{#if page.error}
				{page.error.message}
			{:else if page.status === 404}
				{m.Error404Text()}
			{:else if page.status === 500}
				{m.Error500Text()}
			{/if}
		</p>

		<div class="flex gap-4 justify-center flex-wrap">
			<a
				href={localizeHref(m.letsExploreSlug())}
				class="btn px-6 py-3 text-black uppercase rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200 hover:-translate-y-0.5"
			>
				{m.letsExplore()}
			</a>
			<button
				onclick={goBack}
				class="btn uppercase px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 hover:-translate-y-0.5"
			>
				{m.back()}
			</button>
		</div>
	</div>
</div>
<FunMessageSection />
