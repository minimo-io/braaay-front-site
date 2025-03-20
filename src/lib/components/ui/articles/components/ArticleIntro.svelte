<script lang="ts">
	interface Props {
		title?: string;
		content?: string;
	}

	let { title, content }: Props = $props();
</script>

{#if title}
	<h2
		class="text-[1.2rem] md:text-[1.3rem] leading-[1.75] uppercase text-center font-prata tracking-wider font-thin mb-6"
	>
		{title}
		<!-- Sobre esse
	<i>blend</i>
	perfeito do Uruguayo -->
	</h2>
{/if}
{#if content}
	<p class="bry-article-main-p">
		{@html content}
		<!-- Se você é um entusiasta de vinhos em busca de uma experiência para o seu paladar, o Don Pascual
	Tannat Merlot é uma parada quase obrigatória em sua jornada. Este
	<a href="/pais/uruguai/">vinho uruguaio</a>
	cativa todos os seus sentidos de maneira surpreendente, desde a visão até o último gole. Vamos embarcar
	juntos nesta aventura, explorando o que faz deste vinho uma escolha tão interessante. -->
	</p>
{/if}
