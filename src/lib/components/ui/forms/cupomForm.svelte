<!-- src/lib/components/ui/forms/cupomForm.svelte -->
<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { closeModal } from '$stores/modalState.state.svelte';
	let cupomCode = $state('FREEWILLY');

	import { toast } from 'svoast';

	async function launchToast() {
		toast.error('Super good looking toast ;)');
	}
</script>

<form>
	<label for="cupom-code">Cupom de desconto</label>
	<input id="cupom-code" value={cupomCode} />
	<div class="py-1">
		<button onclick={launchToast}>Launch Toast</button>

		<Button
			type="blue"
			url="/"
			title="Aplicar cupom"
			action={() => {
				closeModal();
			}}
		/>
	</div>
</form>
