<script lang="ts">
	import { Check } from '@lucide/svelte';
	import Button from '../buttons/Button.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import type { Customer } from '$lib/types';

	interface Props {
		customer: Customer | undefined;
	}
	let { customer }: Props = $props();

	console.log('Customer from component');
	console.log(customer);
</script>

<div class="mx-auto p-6 border border-green-dark bg-green-light rounded-lg shadow-sm">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-base font-medium flex items-center text-green-medium">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-green-medium text-grey-background rounded-full mr-2 text-xs"
			>
				<Check class="h-3 ml-1" /></span
			>
			Conta
		</h2>
		<Button title="Alterar" type="light" url={localizeHref('/account/')} size="xs" />
	</div>

	<form class="space-y-4 text-sm text-green-medium">
		{#if customer?.email}
			<div>
				{customer?.email}
				<br />
				<span>{customer?.firstName} {customer?.lastName}</span>
				<span>(#{customer?.id})</span><span></span>
			</div>
		{:else}
			{m.loading()}
		{/if}
	</form>
</div>
