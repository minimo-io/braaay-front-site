<script>
	import ProductAccordion from '$components/ui/ProductAccordion.svelte';
</script>

<main class="max-w-screen-lg mx-auto">
	<!-- Main Product section -->
	<section class="flex flex-col md:flex-row mx-auto">
		<!-- Left side - Image -->
		<div
			class="p-8 flex items-center"
			style="
                background: linear-gradient(
                    to bottom,
                    var(--bry-current-gradient-start),
                    var(--bry-current-gradient-end)
                );
            "
		>
			<img
				src="./images/wines/vinho-don-pascual-tannat-merlot.webp"
				alt="Don Pascual"
				class="mx-auto max-w-[70%]"
				width="680"
				height="578"
			/>
		</div>

		<!-- Right side - Product details -->
		<div class="md:w-[50%] pt-8 pb-0 pl-8 pr-8 md:pr-0">
			<h1 class="bry-product-title pt-4">Familia Deicas Massimo Tannat</h1>
			<p class="mb-4 font-roboto text-[15px] tracking-[0.5px] text-grey-blueish font-normal">
				O vinho Familia Deicas Massimo Tannat é a mais sofisticada e refinada expressão da casta em
				Uruguai. Esse vinho destaca-se por sua intensidade, complexidade e elegância. Amadurecido em
				barricas de carvalho e ânforas de barro. Com um potencial de guarda de 10 a 15 anos.
			</p>

			<div class="mb-4">
				<span class="line-through text-gray-500 mr-2 text-grey-darkest font-roboto">R$1.199,00</span
				>
				<span class="text-2xl font-bold text-grey-darkest font-roboto">R$1.000,00</span>
			</div>

			<p class="text-grey-medium-dark font-roboto text-[15px] mb-4">Em estoque</p>

			<div class="flex items-center mb-4">
				<a
					href="/cart"
					style="background-color: var(--bry-current-color)"
					class="px-8 py-2 text-white rounded-lg uppercase font-roboto text-[13px] tracking-[2.5px]"
				>
					ADICIONAR À SACOLA
				</a>
			</div>

			<!-- Product accordion -->
			<ProductAccordion />
		</div>
	</section>
</main>

<!-- Product Article -->
<article class="relative bg-white py-10 mt-14">
	<div class="absolute inset-x-0 -top-3 flex justify-center">
		<img
			src="./images/divider-green.svg"
			width="23px"
			height="23px"
			alt="divider"
			class="w-[20px] h-[20px] lg:w-[23px] lg:h-[23px]"
		/>
	</div>
	<div class="max-w-screen-lg mx-auto relative">
		<!-- General title header -->
		<div class="bry-header h-[200px] max-h-[200px] bg-[#d1d1d0] relative md:rounded-2xl mb-36">
			<div
				class="absolute inset-0 opacity-70 z-0 md:rounded-2xl"
				style="
                            background-size: cover;
                            background-image: url(./images/vinicola-don-pascual-uruguai.webp),
                                linear-gradient(to bottom, var(--bry-current-color), var(--bry-current-color));
                            background-blend-mode: multiply;
                        "
			></div>
			<!-- Header deck -->
			<h3 class="bry-header-deck">
				<a href="/" style="border-color: var(--bry-current-color)">Don Pascual</a>
			</h3>
			<!-- Header title -->
			<h2 class="bry-header-title">Don Pascual Tannat Merlot</h2>
			<!-- Header author -->
			<div class="bry-header-author">
				<img src="./images/erika-96x96.jpeg" alt="Erika Bezerra" />
				<p class="text-lg font-bold mt-2 text-grey-darkest">Erika Bezerra</p>
				<p class="text-sm mt-0 text-grey-darkest italic font-thin">Sommelier</p>
			</div>
		</div>

		<!-- Article content -->
		<div class="md:px-32 px-[30px]">
			<h2
				class="text-[1.2rem] md:text-[1.3rem] leading-[1.75] uppercase text-center font-prata tracking-wider font-thin mb-6"
			>
				Sobre esse
				<i>blend</i>
				perfeito do Uruguai
			</h2>
			<p class="bry-article-main-p">
				Se você é um entusiasta de vinhos em busca de uma experiência para o seu paladar, o Don
				Pascual Tannat Merlot é uma parada quase obrigatória em sua jornada. Este
				<a href="/pais/uruguai/">vinho uruguaio</a>
				cativa todos os seus sentidos de maneira surpreendente, desde a visão até o último gole. Vamos
				embarcar juntos nesta aventura, explorando o que faz deste vinho uma escolha tão interessante.
			</p>
			<div class="bry-divider bry-bullet-blue"></div>

			<div class="bry-article-content">
				<div class="w-full">
					<!-- <h2>Os vinhos que combinam Tannat e Merlot</h2> -->
					<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700">
						“This is a sample blockquote that emphasizes a quote from a source.”
					</blockquote>
					<p>
						As uvas tannat e merlot são muito diferentes entre si. E daí a magia deste vinho
						uruguaio que nos traz o melhor de dois mundos de sabores diferentes.
					</p>
					<p>
						O Tannat por um lado é responsável por vinhos que abraçam uma abordagem mais rústica,
						carregando consigo uma robustez cativante e taninos audaciosos. Em contraste,
						encontramos a Merlot, outra variedade originária de solo francês, mais precisamente de
						Bordeaux presenteia os tintos com uma suavidade envolvente, uma textura aveludada que
						dança delicadamente pelo paladar, resultando em vinhos que são verdadeiros abraços
						gustativos.
					</p>
					<img
						fetchpriority="high"
						decoding="async"
						src="https://braaay.com/wp-content/uploads/2024/09/familia-deicas-anforas.jpg"
						width="500"
						height="500"
						alt="familia-deicas-anforas"
						srcset="
                                    https://braaay.com/wp-content/uploads/2024/09/familia-deicas-anforas.jpg         500w,
                                    https://braaay.com/wp-content/uploads/2024/09/familia-deicas-anforas-100x100.jpg 100w
                                "
						sizes="(max-width: 500px) 100vw, 500px"
					/>
					<p>
						<strong>🗣️ DICA:</strong>
						Se quiser saber ainda mais sobre esses vinhos tannat, especialidade uruguaia, em algumas
						versões mais puras, é interessante considerar outras opções mais robustas como o
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
						Neste encontro de Tannat e Merlot, a Don Pascual (uma marca de vinho em homenagem ao
						imigrante basco-francês que foi o primeiro a levar a uva tannat para o Uruguai) promete
						atingir um
						<em>equilíbrio único</em>
						, um ponto de fusão onde as características de cada uva se entrelaçam harmoniosamente. Não
						se aventura aos extremos – não é um vinho que se inclina excessivamente para a leveza ou
						pesadez. É um convite para a mesa farta, um vinho para compartilhar entre amigos. Mas, ao
						mesmo tempo, ele sorri para o happy hour, trazendo consigo a versatilidade que o torna bem-vindo
						em diferentes ocasiões.
					</p>
					<h3>Visual: Uma Tela de Cores Vibrantes</h3>
					<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700">
						“This is a sample blockquote that emphasizes a quote from a source.”
					</blockquote>
					<p>
						A jornada começa com o sentido da visão, onde somos recebidos por uma tapeçaria de cores
						profundas e vibrantes. O Don Pascual Tannat Merlot apresenta um tom rubi intenso,
						revelando sua personalidade rica e ousada. Ao inclinar a taça, você notará suas lágrimas
						que escorrem lentamente, indicando sua textura encorpada. A visão deste vinho convida
						você a mergulhar mais profundamente na experiência que está prestes a desfrutar.
					</p>
					<h2 class="!font-prata">Aroma do Don Pascual Tannat Merlot</h2>
					<p>
						Ao aproximar o nariz da taça, um abraço perfumado e acolhedor é oferecido pelo Don
						Pascual Tannat Merlot.
					</p>
					<p>
						Notas de frutas vermelhas maduras, como cerejas e ameixas, dançam elegantemente com
						toques sutis de especiarias, criando uma sinfonia aromática que desperta a curiosidade.
					</p>
					<p>
						A presença do Merlot traz uma suavidade delicada, enquanto o Tannat adiciona uma pitada
						de ousadia e complexidade. Este aroma convida você a explorar ainda mais, preparando o
						paladar para a jornada de sabores que está por vir.
					</p>
					<h2>Paladar: Uma Dança de Sabores</h2>
					<p>
						No momento tão aguardado do primeiro gole, o Don Pascual Tannat Merlot revela sua
						verdadeira personalidade no paladar. Uma dança de sabores intrigantes acontece, onde a
						fruta suculenta do Merlot se mistura com a estrutura robusta do Tannat. O encontro de
						cerejas maduras e um toque sutil de baunilha proporciona uma experiência equilibrada e
						envolvente. Os taninos firmes do Tannat adicionam uma textura aveludada que envolve a
						língua, criando uma sensação de profundidade e complexidade. Este é um vinho que mantém
						sua promessa, entregando uma experiência de sabor gratificante.
					</p>
					<h2>Harmonização: O Parceiro Perfeito</h2>
					<p>
						A busca pelo parceiro perfeito para o Don Pascual Tannat Merlot leva a um universo de
						possibilidades culinárias. Sua estrutura versátil o torna um excelente acompanhamento
						para uma variedade de pratos. Experimente com carnes grelhadas, como um suculento bife
						de cordeiro ou um saboroso hambúrguer caseiro. Queijos de média intensidade, como gouda
						ou cheddar, também encontram um equilíbrio elegante com o caráter deste vinho. A
						experiência de harmonização com Don Pascual Tannat Merlot é uma aventura gastronômica em
						si mesma, onde cada mordida e gole se complementam harmoniosamente.
					</p>
					<h2>Conclusão sobre o vinho Don Pascual Tannat Merlot</h2>
					<p>
						O Don Pascual Tannat Merlot é mais do que apenas um vinho – é uma jornada sensorial
						inesquecível que celebra os sentidos de maneira encantadora. Desde a visão hipnotizante
						até o último gole satisfatório, este vinho uruguaio oferece uma experiência que envolve
						todos os aspectos da apreciação vinícola. Combinando a intensidade do Tannat com a
						suavidade do Merlot, o Don Pascual Tannat Merlot é uma verdadeira celebração de sabores
						e aromas que cativará tanto o novato quanto o entusiasta de vinhos experiente. Então,
						pegue sua taça, reúna os amigos e desfrute desta jóia vinícola que nos leva em uma
						jornada deliciosa através dos sentidos.
					</p>
					<p>Saúde!</p>
				</div>
				<div class="w-full md:w-1/3 pl-0 md:pl-6">
					<div class="md:sticky md:top-1">
						<blockquote
							class="instagram-media"
							data-instgrm-permalink="https://www.instagram.com/p/C-n1EfcsJPi/?utm_source=ig_embed&amp;utm_campaign=loading"
							data-instgrm-version="14"
							style="
                                        background: #fff;
                                        border: 0;
                                        border-radius: 3px;
                                        box-shadow:
                                            0 0 1px 0 rgba(0, 0, 0, 0.5),
                                            0 1px 10px 0 rgba(0, 0, 0, 0.15);
                                        margin: 1px;
                                        max-width: 540px;
                                        min-width: 326px;
                                        padding: 0;
                                        width: calc(100% - 2px);
                                    "
						>
							<div style="padding: 16px">
								<a
									href="https://www.instagram.com/p/C-n1EfcsJPi/?utm_source=ig_embed&amp;utm_campaign=loading"
									style="
                                                background: #ffffff;
                                                line-height: 0;
                                                padding: 0 0;
                                                text-align: center;
                                                text-decoration: none;
                                                width: 100%;
                                            "
									target="_blank"
								>
									<div style="display: flex; flex-direction: row; align-items: center">
										<div
											style="
                                                        background-color: #f4f4f4;
                                                        border-radius: 50%;
                                                        flex-grow: 0;
                                                        height: 40px;
                                                        margin-right: 14px;
                                                        width: 40px;
                                                    "
										></div>
										<div
											style="
                                                        display: flex;
                                                        flex-direction: column;
                                                        flex-grow: 1;
                                                        justify-content: center;
                                                    "
										>
											<div
												style="
                                                            background-color: #f4f4f4;
                                                            border-radius: 4px;
                                                            flex-grow: 0;
                                                            height: 14px;
                                                            margin-bottom: 6px;
                                                            width: 100px;
                                                        "
											></div>
											<div
												style="
                                                            background-color: #f4f4f4;
                                                            border-radius: 4px;
                                                            flex-grow: 0;
                                                            height: 14px;
                                                            width: 60px;
                                                        "
											></div>
										</div>
									</div>
									<div style="padding: 19% 0"></div>
									<div style="display: block; height: 50px; margin: 0 auto 12px; width: 50px">
										<svg
											width="50px"
											height="50px"
											viewBox="0 0 60 60"
											version="1.1"
											xmlns="https://www.w3.org/2000/svg"
											xmlns:xlink="https://www.w3.org/1999/xlink"
										>
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<g transform="translate(-511.000000, -20.000000)" fill="#000000">
													<g>
														<path
															d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
														></path>
													</g>
												</g>
											</g>
										</svg>
									</div>
									<div style="padding-top: 8px">
										<div
											style="
                                                        color: #3897f0;
                                                        font-family: Arial, sans-serif;
                                                        font-size: 14px;
                                                        font-style: normal;
                                                        font-weight: 550;
                                                        line-height: 18px;
                                                    "
										>
											Ver essa foto no Instagram
										</div>
									</div>
									<div style="padding: 12.5% 0"></div>
									<div
										style="
                                                    display: flex;
                                                    flex-direction: row;
                                                    margin-bottom: 14px;
                                                    align-items: center;
                                                "
									>
										<div>
											<div
												style="
                                                            background-color: #f4f4f4;
                                                            border-radius: 50%;
                                                            height: 12.5px;
                                                            width: 12.5px;
                                                            transform: translateX(0px) translateY(7px);
                                                        "
											></div>
											<div
												style="
                                                            background-color: #f4f4f4;
                                                            height: 12.5px;
                                                            transform: rotate(-45deg) translateX(3px) translateY(1px);
                                                            width: 12.5px;
                                                            flex-grow: 0;
                                                            margin-right: 14px;
                                                            margin-left: 2px;
                                                        "
											></div>
											<div
												style="
                                                            background-color: #f4f4f4;
                                                            border-radius: 50%;
                                                            height: 12.5px;
                                                            width: 12.5px;
                                                            transform: translateX(9px) translateY(-18px);
                                                        "
											></div>
										</div>
										<div style="margin-left: 8px">
											<div
												style="
                                                            background-color: #f4f4f4;
                                                            border-radius: 50%;
                                                            flex-grow: 0;
                                                            height: 20px;
                                                            width: 20px;
                                                        "
											></div>
											<div
												style="
                                                            width: 0;
                                                            height: 0;
                                                            border-top: 2px solid transparent;
                                                            border-left: 6px solid #f4f4f4;
                                                            border-bottom: 2px solid transparent;
                                                            transform: translateX(16px) translateY(-4px) rotate(30deg);
                                                        "
											></div>
										</div>
										<div style="margin-left: auto">
											<div
												style="
                                                            width: 0px;
                                                            border-top: 8px solid #f4f4f4;
                                                            border-right: 8px solid transparent;
                                                            transform: translateY(16px);
                                                        "
											></div>
											<div
												style="
                                                            background-color: #f4f4f4;
                                                            flex-grow: 0;
                                                            height: 12px;
                                                            width: 16px;
                                                            transform: translateY(-4px);
                                                        "
											></div>
											<div
												style="
                                                            width: 0;
                                                            height: 0;
                                                            border-top: 8px solid #f4f4f4;
                                                            border-left: 8px solid transparent;
                                                            transform: translateY(-4px) translateX(8px);
                                                        "
											></div>
										</div>
									</div>
									<div
										style="
                                                    display: flex;
                                                    flex-direction: column;
                                                    flex-grow: 1;
                                                    justify-content: center;
                                                    margin-bottom: 24px;
                                                "
									>
										<div
											style="
                                                        background-color: #f4f4f4;
                                                        border-radius: 4px;
                                                        flex-grow: 0;
                                                        height: 14px;
                                                        margin-bottom: 6px;
                                                        width: 224px;
                                                    "
										></div>
										<div
											style="
                                                        background-color: #f4f4f4;
                                                        border-radius: 4px;
                                                        flex-grow: 0;
                                                        height: 14px;
                                                        width: 144px;
                                                    "
										></div>
									</div>
								</a>
								<p
									style="
                                                color: #c9c8cd;
                                                font-family: Arial, sans-serif;
                                                font-size: 14px;
                                                line-height: 17px;
                                                margin-bottom: 0;
                                                margin-top: 8px;
                                                overflow: hidden;
                                                padding: 8px 0 7px;
                                                text-align: center;
                                                text-overflow: ellipsis;
                                                white-space: nowrap;
                                            "
								>
									<a
										href="https://www.instagram.com/p/C-n1EfcsJPi/?utm_source=ig_embed&amp;utm_campaign=loading"
										style="
                                                    color: #c9c8cd;
                                                    font-family: Arial, sans-serif;
                                                    font-size: 14px;
                                                    font-style: normal;
                                                    font-weight: normal;
                                                    line-height: 17px;
                                                    text-decoration: none;
                                                "
										target="_blank"
									>
										Uma publicação compartilhada por BRAAAY | Experiências que Conectam
										(@braaay_com)
									</a>
								</p>
							</div>
						</blockquote>
						<script async src="//www.instagram.com/embed.js"></script>
					</div>
				</div>
			</div>
		</div>
	</div>
</article>
