<div>
	<ul class="space-y-2 text-gray-800">
		<li class="flex items-start">
			<span> 1 </span>
			<span>Acesse ao app ou site de seu banco</span>
		</li>
		<li class="flex items-start">
			<span> 2 </span>
			<span>Busque a opção pagar com PIX</span>
		</li>
		<li class="flex items-start">
			<span> 3 </span>
			<span>Leia o QR Code ou Código PIX</span>
		</li>
		<li class="flex items-start">
			<span> 4 </span>
			<span>Pronto, você receberá a confirmação do pagamento</span>
		</li>
	</ul>
</div>

<style class="postcss">
	ul {
		@apply mt-8 mb-5;
	}
	li {
		@apply text-blue;
	}
	li span:first-child {
		@apply opacity-100 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full border font-semibold text-sm mr-3 relative top-1 md:top-[2px];
	}
	li span:last-child {
		@apply opacity-80 text-[18px] md:text-[15px];
	}
</style>
