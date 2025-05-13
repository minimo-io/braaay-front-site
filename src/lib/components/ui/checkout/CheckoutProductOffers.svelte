<script lang="ts">
	import PrevNextButton from '../buttons/PrevNextButton.svelte';
	import Button from '../buttons/Button.svelte';
	// Import the data (later via prev)
</script>

<div class="flex items-center justify-between mb-2 pl-2">
	<div class="uppercase font-bold font-roboto text-sm">🎉&nbsp;&nbsp;Ofertas imperdíveis</div>
	<div class="flex items-center">
		<PrevNextButton
			moveBackward={true}
			action={() => {
				alert("Let's move backard");
			}}
		/>
		<PrevNextButton
			moveForward={true}
			action={() => {
				alert("Let's move forward");
			}}
		/>
	</div>
</div>

<div class="bg-yellow-light border-grey-light border rounded-lg border-dashed p-5 mb-2">
	<div class="flex justify-center align-middle">
		<div class="flex flex-col md:flex-row">
			<div class="md:border-r md:border-dashed md:border-grey-light md:mr-4 md:pr-4">
				<div class="flex items-center md:mx-auto md:justify-center">
					<img src="/images/wines/Deica-2-1.webp" alt="Signos Malbec" class="mr-4 h-20" />
					<div>
						<h2 class="font-bold leading-none mb-1 text-[14px]">Signos Malbec</h2>
						<div>
							<span class="text-grey-dark line-through text-[14px]"> R$ 79,90 </span>
							<span class="text-green-dark font-bold ml-2 text-[14px]"> R$ 44,90</span>
						</div>
					</div>
				</div>
				<div class="bry-dashed-line my-5"></div>
				<p class="font-bold text-sm text-left md:text-center">Oferta imperdível!</p>
				<p class="mt-2 text-xs text-left md:text-center">
					Não perca a oportunidade, adquira agora esta promoção exclusiva.
				</p>

				<div class="mt-4">
					<Button title="Adicionar ao carrinho" rounded="lg" type="light" size="sm" url="/">
						{#snippet icon()}
							<!-- <Headset class="lucide-button" /> -->
						{/snippet}
					</Button>
				</div>
			</div>
			<div class="hidden md:block">
				<div class="flex items-center md:mx-auto md:justify-center">
					<img
						src="/images/wines/vinho-don-pascual-tannat-merlot.webp"
						alt="outro vinho"
						class="mr-4 h-20"
					/>
					<div>
						<h2 class="font-bold text-[14px] leading-none mb-1">Don Pascual Cabernet Sauvignon</h2>
						<div>
							<span class="text-grey-dark line-through text-[14px]"> R$ 120,90 </span>
							<span class="ml-2 text-green-dark font-bold text-[14px]"> R$67,90</span>
						</div>
					</div>
				</div>
				<div class="bry-dashed-line my-5"></div>
				<p class="font-bold text-sm text-left md:text-center">Oferta imperdível!</p>
				<p class="mt-2 text-xs text-left md:text-center">
					Não perca a oportunidade, adquira agora esta promoção exclusiva.
				</p>

				<div class="mt-4">
					<Button title="Adicionar ao carrinho" rounded="lg" type="light" size="sm" url="/">
						{#snippet icon()}
							<!-- <Headset class="lucide-button" /> -->
						{/snippet}
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
