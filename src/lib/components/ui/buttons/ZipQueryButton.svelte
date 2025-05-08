<script lang="ts">
	import { Search } from '@lucide/svelte';
	// import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

	const locale = getLocale();
</script>

{#if locale == 'pt'}
	<a
		href="https://buscacepinter.correios.com.br/app/endereco/index.php"
		target="_blank"
		rel="nofollow noreferrer"
		class="text-xs flex items-center justify-end font-bold text-green-medium"
	>
		<Search class="h-3 mr-0 pr-0 relative -right-1" />Não sei meu CEP
	</a>
{:else if locale == 'uy'}
	<a
		href="https://www.correo.com.uy/codigospostales"
		target="_blank"
		rel="nofollow noreferrer"
		class="text-xs flex items-center justify-end font-bold text-green-medium"
	>
		<Search class="h-3 mr-0 pr-0 relative -right-1" />No sé mi Código Postal
	</a>
{/if}
