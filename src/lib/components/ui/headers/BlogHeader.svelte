<script lang="ts">
	import Button from '$components/ui/buttons/Button.svelte';
</script>

<div
	class="max-w-screen-xl mx-auto flex flex-col md:flex-row rounded-md overflow-hidden pt-10 pb-5 md:pb-0 px-[30px] md:px-10"
>
	<!-- Image Section -->
	<div class="lg:w-1/2 max-h-[300px] self-center">
		<img
			src="/images/Geleia-de-Vinho.jpg"
			alt="Receita de Geleia de Vinho"
			class="w-full h-[300px] object-cover rounded-2xl"
		/>
	</div>

	<!-- Text Content Section -->
	<div class="lg:w-1/2 pt-10 px-5 md:p-10">
		<!-- Metadata -->
		<div class="text-sm flex items-center space-x-2 mb-2">
			<span class="font-medium flex align-middle justify-center">
				<img
					src="/images/erika-96x96.jpeg"
					alt="erika"
					class="self-center rounded-full w-9 h-9 mr-2"
				/>
				<span class="self-center text-sm md:text-lg">Erika Bezerra</span>
			</span>
			<span>•</span>
			<div class="text-grey-medium">
				12 de agosto 2024
				<span class="hidden md:inline">(atualizado)</span>
			</div>
		</div>

		<!-- Title -->
		<h2 class="text-lg md:text-xl mb-4 font-prata mt-5">
			<a href="/article">RECEITA DE GELEIA DE VINHO</a>
		</h2>

		<!-- Description -->

		<p class="text-grey-blueish text-[15px] md:text-[15px] font-roboto mb-4">
			Se você é um amante de vinho vai adorar essa iguaria: Geleia de Vinho. Descubra, nesse artigo
			da Braaay, como preparar uma deliciosa receita de Geleia de Vinho! Como preparar a Geleia de
			vinho? E como harmonizar-la com os melhores vinhos uruguayios e brasileiros!
		</p>

		<div class="mb-3 max-w-none md:max-w-[150px]">
			<Button title="Ler artigo" size="sm" type="light" url="/article" bold={true}></Button>
		</div>

		<!-- Tags -->
		<div class="text-sm text-grey-medium-dark flex items-center space-x-2">
			<a href="/category" class="text-sun font-bold py-1 rounded">Dica do Chef</a>
			<span>•</span>
			<span>Leitura em 6 min</span>
		</div>
	</div>
</div>
