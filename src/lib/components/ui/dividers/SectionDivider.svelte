<!-- SectionDivider differs from Divider in that they do not work standalone, 
 rather divide backgrounds with their dot -->
<script lang="ts">
	interface Props {
		color?: 'green' | 'blue';
	}
	let { color = 'green' }: Props = $props();
</script>

<div class="absolute inset-x-0 -top-3 flex justify-center z-10">
	<img
		src="/images/divider-{color}.svg"
		width="23px"
		height="23px"
		alt="divider"
		class="w-[20px] h-[20px] lg:w-[23px] lg:h-[23px]"
	/>
</div>
