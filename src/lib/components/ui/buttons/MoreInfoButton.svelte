<script lang="ts">
	import { smoothScroll } from '$lib/utils/smoothScroll';
	interface Props {
		title: string;
		action?: () => void;
	}

	let { title, action }: Props = $props();
</script>

<a
	use:smoothScroll
	href="#know-more"
	onclick={(event) => {
		if (action) {
			action();
			event.preventDefault();
		}
	}}
	class="font-roboto text-grey-medium-dark font-[11px] text-xs border border-grey-light py-[3px] px-[7px] antialiased ml-2 rounded-md shine-effect"
>
	{title}
</a>
