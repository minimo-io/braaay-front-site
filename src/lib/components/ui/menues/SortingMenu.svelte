<script lang="ts">
	import { ArrowDownUp, LayoutGrid } from '@lucide/svelte';
</script>

<div class="bry-sorting">
	<!-- Sorting Button -->
	<!-- <span class="text-xs mr-1 text-grey-blueish uppercase">Ordenação:</span> -->
	<button>
		<ArrowDownUp class="lucide-button w-5 h-5" />
		Mais relevante
	</button>
	<!-- Columns -->
	<button>
		<LayoutGrid class="lucide-button w-5 h-5 mr-2" />
		Grade
	</button>
	<!-- Map Button -->
	<!-- <button>
            <Map class="lucide-button w-5 h-5 mr-2" />
            Mapa
        </button> -->
</div>
