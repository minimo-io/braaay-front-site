<script lang="ts">
	interface Props {
		color?: 'green' | 'blue';
		extraClasses?: string;
	}
	let { color = 'blue', extraClasses }: Props = $props();
</script>

<div
	class={[
		'bry-divider',
		extraClasses,
		color === 'green' && 'bry-bullet-green',
		color === 'blue' && 'bry-bullet-blue'
	]}
></div>
