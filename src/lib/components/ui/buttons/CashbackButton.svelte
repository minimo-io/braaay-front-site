<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import { Coins } from '@lucide/svelte';
	interface Props {
		title: string;
		value: number;
		currency: string;
	}
	let { title, currency, value }: Props = $props();
</script>

<a
	href={localizeHref('/account/my-cashback/')}
	class="btn h-[35px] lg:h-[45px] text-blue uppercase relative flex items-center justify-center ml-3 border shine-effect"
>
	<Coins class="h-[15px] text-sun" fill="#BD8836" />
	<span class="lg:mt-1">{currency}{value.toFixed(2)}</span>
	<span
		class="hidden md:flex pt-[2px] absolute md:-top-[10px] bg-white border border-grey-lighter hover:ring-grey-medium text-blue font-bold antialiased px-2 py-0 text-[8px] rounded-xl uppercase"
	>
		{title}
	</span>
</a>
