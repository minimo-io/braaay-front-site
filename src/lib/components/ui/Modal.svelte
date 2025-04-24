<!-- src/lib/components/ui/Modal.svelte -->
<script>
	let { showModal = $bindable(), header, content } = $props();
	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) {
			dialog.showModal();
		} else {
			dialog.close();
		}
	});

	function closeDialog() {
		dialog.close();
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<!-- 
	IF WE WANT TO CLOSE IT ON OVERLAY
	onclick={(e) => {
		if (e.target === dialog) closeDialog();
	}}
 -->
<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	class="w-dvw md:w-[30em] md:min-w-[450px] rounded-xl border-none border-grey-light md:shadow-2xl"
>
	<div class="p-7 pb-6">
		<div class="font-bold font-roboto">{@html header}</div>

		{#if content}
			<div class="my-3">{@render content()}</div>
		{/if}
		<div class="text-center flex justify-center">
			<button
				onclick={closeDialog}
				class="justify-center text-center text-xs text-grey-medium-dark mt-2 md:mt-0 mb-0"
			>
				Cancelar
			</button>
		</div>
	</div>
</dialog>

<style>
	dialog::backdrop {
		background: rgba(33, 38, 128, 0.2);
		transition: opacity 300ms ease-out;
		z-index: 1;
	}

	/* Entry animation */
	dialog[open] {
		animation: zoomIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	dialog[open]::backdrop {
		animation: fadeIn 0.2s ease-out;
	}

	button {
		display: block;
	}
</style>
