<script lang="ts">
	import { removeWPBakeryShortcodes } from '$lib/utils/index';
	interface Props {
		content: string;
	}
	let { content }: Props = $props();
</script>

<div class="w-full">
	{@html removeWPBakeryShortcodes(content)}
	<!-- <p>
		As uvas oh as uvas... tannat e merlot são muito diferentes entre si. E daí a magia deste vinho
		uruguaio que nos traz o melhor de dois mundos de sabores diferentes.
	</p>
	<p>
		O Tannat por um lado é responsável por vinhos que abraçam uma abordagem mais rústica, carregando
		consigo uma robustez cativante e taninos audaciosos. Em contraste, encontramos a Merlot, outra
		variedade originária de solo francês, mais precisamente de Bordeaux presenteia os tintos com uma
		suavidade envolvente, uma textura aveludada que dança delicadamente pelo paladar, resultando em
		vinhos que são verdadeiros abraços gustativos.
	</p>
	<p>
		<strong>🗣️ DICA:</strong>
		Se quiser saber ainda mais sobre esses vinhos tannat, especialidade uruguaia, em algumas versões
		mais puras, é interessante considerar outras opções mais robustas como o
		<strong>
			<a href="https://braaay.com/produto/vinho-tinto-uruguai-cerro-del-toro-tannat/">
				Tannat da vinícola Cerro del Toro
			</a>
		</strong>
		ou o excelente vinho reserva
		<a href="https://braaay.com/produto/vinho-uruguaio-artesana-tannat-zinfandel-reserva/">
			<strong>tannat da</strong>
			Artesana
		</a>
		em um blend com a uva Zinfandel.
	</p>

	<p>
		Neste encontro de Tannat e Merlot, a Don Pascual (uma marca de vinho em homenagem ao imigrante
		basco-francês que foi o primeiro a levar a uva tannat para o Uruguai) promete atingir um
		<em>equilíbrio único</em>
		, um ponto de fusão onde as características de cada uva se entrelaçam harmoniosamente. Não se aventura
		aos extremos – não é um vinho que se inclina excessivamente para a leveza ou pesadez. É um convite
		para a mesa farta, um vinho para compartilhar entre amigos. Mas, ao mesmo tempo, ele sorri para o
		happy hour, trazendo consigo a versatilidade que o torna bem-vindo em diferentes ocasiões.
	</p>
	<h3>Visual: Uma Tela de Cores Vibrantes</h3>
	<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700">
		“This is a sample blockquote that emphasizes a quote from a source.”
	</blockquote> -->
</div>
