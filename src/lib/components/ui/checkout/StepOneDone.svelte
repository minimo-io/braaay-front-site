<script lang="ts">
	import { Check } from '@lucide/svelte';
	import Button from '../buttons/Button.svelte';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import type { Customer } from '$lib/types';
	import { formatCpf, formatPhone } from '$lib/utils';
	import { isAuthenticated } from '$lib/graphql/auth';

	interface Props {
		customer: Customer | undefined;
		onActionClick: () => void;
	}
	let { customer, onActionClick }: Props = $props();
</script>

<div class="mx-auto p-6 border border-green-dark bg-green-light rounded-lg shadow-sm">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-base font-bold flex items-center text-green-medium">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-green-medium text-grey-background rounded-full mr-2 text-xs"
			>
				<Check class="h-3 ml-1" />
			</span>
			Conta
		</h2>
		{#if isAuthenticated()}
			<Button title="Alterar" type="light" url={localizeHref('/account/my-info/')} size="xs" />
		{:else}
			<Button
				title="Alterar"
				type="light"
				customPx="max-w-[100px]"
				action={() => onActionClick()}
				size="xs"
			/>
		{/if}
	</div>

	<form class="space-y-4 text-sm text-green-medium">
		{#if customer?.email}
			<div>
				{customer?.email} / {formatPhone(getLocale(), customer.telephone) || '(Sem telefone)'}
				<br />
				<span>{customer?.firstName} {customer?.lastName}</span>

				- <span>({customer?.databaseId ? `#${customer.databaseId}` : 'Convidado'})</span>
				- <span class="font-bold">CPF:</span>
				{#if customer.cpf}
					<span> {formatCpf(customer?.cpf)}</span>
				{:else}
					<span class="italic">(Sem CPF).</span>
				{/if}
			</div>
		{:else}
			{m.loading()}
		{/if}
	</form>
</div>
