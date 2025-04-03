<script lang="ts">
	import { smoothScroll } from '$lib/utils/index';
	interface Props {
		title: string;
		action?: () => void;
		customStyles?: string;
		url?: string;
	}

	let { title, action, customStyles = '', url = '#know-more' }: Props = $props();

	// This action conditionally delegates to smoothScroll
	function conditionalSmoothScroll(node: HTMLElement) {
		if (url === '#know-more') {
			return smoothScroll(node);
		}
	}
</script>

<a
	use:conditionalSmoothScroll
	href={url}
	onclick={(event) => {
		if (action) {
			action();
			event.preventDefault();
		}
	}}
	class={[
		'font-roboto text-grey-medium-dark font-[11px] text-xs border border-grey-light py-[3px] px-[7px] antialiased ml-2 rounded-md shine-effect',
		customStyles
	]}
>
	{@html title}
</a>
