<script lang="ts">
	import { onMount } from 'svelte';
	import Glide from '@glidejs/glide';
	import '@glidejs/glide/dist/css/glide.core.css';
	import { getLocale } from '$lib/paraglide/runtime';

	const pageLocale = $derived(getLocale());

	onMount(async () => {
		let glide = new Glide('#glide-footer', {
			type: 'carousel',
			perView: 1,
			autoplay: 5000,
			hoverpause: true,
			gap: 0
		});

		glide.mount();
	});
</script>

{#if pageLocale === 'pt'}
	<div class="bry-footer-features hidden md:flex">
		<div class="bry-footer-features-item">
			<h2 class="text-xl font-semibold mb-4">Pagamento em até 4x</h2>
			<p>
				Você pode pagar no cartão em até 4x sem juros (com parcela mínima de R$50), no PIX ou
				através do Bitcoin via Lightning Network. Não esqueça do cashback!
			</p>
		</div>

		<div class="bry-footer-features-item">
			<h2 class="text-xl font-semibold mb-4">Experiências além da taça</h2>
			<p>
				Venha explorar e conhecer o showroom, participe dos workshops ou faça parte do <strong
					>Clube Passport</strong
				> para obtener benefícios e conhecer pessoas!
			</p>
		</div>
		<div class="bry-footer-features-item">
			<h2 class="partial-border">Especialistas em 🇺🇾 e 🇧🇷</h2>
			<p>
				Viajamos, conhecemos, nos aventuramos e trazemos a melhor seleção de vinhos uruguaios e
				brasileiros, além do melhor de Itália, Argentina, Chile e Portugal.
			</p>
		</div>
	</div>

	<!-- Carrousel -->
	<div id="glide-footer" class="glide bry-footer-features block md:hidden">
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides">
				<li class="glide__slide w-full">
					<div class="bry-footer-features-item">
						<h2 class="text-xl font-semibold mb-4">Até 4x sem juros + Cashback</h2>
						<p>
							Você pode pagar no cartão em até 4x sem juros (com parcela mínima de R$50), no PIX ou
							através do Bitcoin via Lightning Network. Não esqueça do cashback!
						</p>
					</div>
				</li>
				<li class="glide__slide w-full">
					<div class="bry-footer-features-item">
						<h2 class="text-xl font-semibold mb-4">Experiências além da taça</h2>
						<p>
							Venha explorar e conhecer o showroom, participe dos workshops ou faça parte do <strong
								>Clube Passport</strong
							> para obtener benefícios e conhecer pessoas!
						</p>
					</div>
				</li>
				<li class="glide__slide">
					<div class="bry-footer-features-item">
						<h2 class="partial-border">Especialistas em 🇺🇾 e 🇧🇷</h2>
						<p>
							Viajamos, conhecemos, nos aventuramos e trazemos a melhor seleção de vinhos uruguaios
							e brasileiros, além do melhor de Itália, Argentina, Chile e Portugal.
						</p>
					</div>
				</li>

				<!-- Add more slides as needed -->
			</ul>
		</div>
		<!-- Dots for Slide Navigation -->

		<div class="glide__bullets absolute -bottom-1 transform right-10" data-glide-el="controls[nav]">
			<button class="glide__bullet !w-[8px] !h-[8px]" aria-label="bullet" data-glide-dir="=0"
				>&nbsp;</button
			>
			<button class="glide__bullet !w-[8px] !h-[8px]" aria-label="bullet" data-glide-dir="=1"
				>&nbsp;</button
			>
			<button class="glide__bullet !w-[8px] !h-[8px]" aria-label="bullet" data-glide-dir="=2"
				>&nbsp;</button
			>
		</div>
	</div>
{:else if pageLocale == 'uy'}{/if}
