<script lang="ts">
	interface Props {
		moveBackward?: boolean;
		moveForward?: boolean;
		action: () => void;
	}
	let { moveForward = false, moveBackward = false, action }: Props = $props();
</script>

<button
	onclick={(event) => {
		action();
		event.preventDefault();
	}}
	class="bg-white p-2 py-[2px] rounded-lg mr-2 border border-dashed border-grey-lighter shine-effect"
>
	{#if moveBackward}
		←
	{/if}
	{#if moveForward}
		→
	{/if}
	{#if !moveBackward && !moveForward}
		-
	{/if}
</button>
