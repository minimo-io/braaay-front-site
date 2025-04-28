<form class="mx-2 md:mx-auto">
	<!-- Ship to home or work -->
	<label class="flex items-center space-x-3 cursor-pointer">
		<input
			type="radio"
			name="recipient"
			class="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
			checked
		/>
		<span class="text-sm">Enviar para casa ou trabalho</span>
	</label>

	<!-- Local Pickup -->
	<label class="flex items-start space-x-3 mt-3 cursor-pointer">
		<input
			type="radio"
			name="recipient"
			class="w-5 h-5 text-sun border-grey-medium focus:ring-sun"
		/>
		<span class="flex flex-col">
			<span class="text-sm">Retirada no Showroom</span>
			<span class="text-xs text-grey-medium"> Seg a Sex, das 09:00 às 18:30, exceto feriados </span>
		</span>
	</label>
</form>
