<script>
	import Button from '$components/ui/buttons/Button.svelte';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import { Gift, Minus, Plus, Sparkle, Truck } from 'lucide-svelte';
</script>

<main>
	<!-- Cart -->
	<div class="max-w-screen-lg mx-[30px] md:mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-0 md:gap-7">
			<div class="mt-8">
				<div class="flex justify-start mb-4">
					<div class="scale-75 relative right-2">
						<a href="/" class="bry-cart relative h-[25px] uppercase flex items-center">
							<i class="bry-bag"></i>
							<span
								class="flex justify-center items-center rounded-full bg-sun p-0 w-4 h-4 lg:w-5 lg:h-5 font-roboto text-[10px] text-white ring-inset absolute top-1 lg:top-0 -right-2"
							>
								0
							</span>
						</a>
					</div>

					<h2 class="text-[19px] font-prata ml-0">Meu carrinho</h2>
				</div>
				<div class="flex flex-col">
					<div class="border border-grey-lighter bg-white rounded-lg p-5 order-1">
						<div class="flex flex-col md:flex-row justify-between align-middle">
							<div class="flex w-full md:w-[50%] md:pr-10">
								<img
									src="/images/wines/Pizzato-Legno-Chardonnay.webp"
									alt="Product"
									class="w-16 mr-4"
								/>
								<div class="self-center">
									<p class="font-medium font-roboto leading-5">Pizzato Chardonnay de Chardonnays</p>
									<p class="text-xs text-grey-medium mt-1">#25-26-195-130661</p>
									<div class="flex mt-1 font-light text-xs items-center">
										<label class="flex items-center font-roboto">
											<input class="mr-1 !accent-black" type="checkbox" checked />
											Para presente
										</label>
									</div>
								</div>
							</div>

							<div class="bry-cart-item-quantity">
								<!-- Minus Button -->
								<button
									class="flex items-center justify-center w-7 h-7 rounded-full bg-sun text-white font-bold"
								>
									<!-- &#8722; -->
									<Minus class="h-4" />
								</button>

								<!-- Quantity Input -->
								<input
									type="tel"
									value="1"
									class="w-20 border p-4 border-grey-lighter rounded-full h-7 text-center text-lg font-semibold bg-transparent focus:outline-none"
									min="1"
								/>

								<!-- Plus Button -->
								<button
									class="flex items-center justify-center w-7 h-7 rounded-full bg-sun text-white font-bold"
									aria-label="Add"
								>
									<Plus class="h-4" />
								</button>
							</div>

							<div class="flex w-[100px] flex-col self-center justify-center pr-0 md:pr-3">
								<p class="font-semibold text-center md:text-right">R$59,90</p>
								<a
									href="/"
									class="text-grey-medium font-normal text-xs text-center md:text-right mt-[2px]"
								>
									remover
								</a>
							</div>
						</div>

						<div class="my-5 border-t border-t-grey-lighter"></div>

						<div class="flex flex-col md:flex-row justify-between align-middle">
							<div class="flex w-full md:w-[50%] md:pr-10">
								<img src="./images/wines/Deica-2-1.webp" alt="Product" class="w-16 mr-4" />
								<div class="self-center">
									<p class="font-medium font-roboto leading-5">
										Preludio Barrel Select Familia Deicas
									</p>
									<p class="text-xs text-grey-medium mt-1">#25-26-195-141412</p>
									<div class="flex mt-1 font-light text-xs items-center">
										<label class="flex items-center font-roboto">
											<input class="mr-1 !accent-black" type="checkbox" />
											Para presente
										</label>
									</div>
								</div>
							</div>

							<div class="bry-cart-item-quantity">
								<!-- Minus Button -->
								<button
									class="flex items-center justify-center w-7 h-7 rounded-full bg-grey-blueish text-white font-bold"
								>
									<Minus class="h-4" />
								</button>

								<!-- Quantity Input -->
								<input
									type="tel"
									value="1"
									class="w-20 border p-4 border-grey-lighter rounded-full h-7 text-center text-lg font-semibold bg-transparent focus:outline-none"
									min="1"
								/>

								<!-- Plus Button -->
								<button
									class="flex items-center justify-center w-7 h-7 rounded-full bg-grey-blueish text-white font-bold"
								>
									<Plus class="h-4" />
								</button>
							</div>

							<div class="flex w-[100px] flex-col self-center justify-center pr-3">
								<p class="font-semibold text-center md:text-right">R$550,50</p>
								<a
									href="/"
									class="text-grey-medium font-normal text-xs text-center md:text-right mt-[2px]"
								>
									remover
								</a>
							</div>
						</div>
					</div>

					<!-- <h2 class="text-[20px] mb-4 mt-10 ml-2 font-prata">
                                Aproveite as ofertas
                            </h2> -->
					<!-- Promo clube main -->
					<div
						class="border order-2 bg-white rounded-md border-sun shadow-md p-6 mx-auto mt-6 hidden md:block"
					>
						<div class="text-center">
							<h2 class="text-xl tracking-widest text-sun font-prata flex justify-center Xscale-90">
								<Sparkle class="pr-1" />
								<span>SEJA PASSPORT!</span>
								<Sparkle class="pl-1" />
							</h2>
							<p class="text-lg font-semibold mt-2 leading-[23px] w-5/6 mx-auto">
								Ganhe 10% em cashback, fretes grátis + 3 vinhos todo mês!
							</p>
							<p class="text-xs text-grey-dark mt-3 leading-2 w-5/6 block mx-auto">
								Junte-se ao APP do Clube e
								<strong>Economize, Ganhe, Diverta-se com vinho!</strong>
								Com cashbacks entre 5 e 10% em toda compra, 3 vinhos top todo mês + fretes grátis! Além
								de experiências com outros Passport e compras coletivas!
							</p>
							<!-- <button class="bg-sun text-white font-medium py-1 px-4 rounded-full mt-4">
								Adicionar ao carrinho
							</button> -->
							<div class="w-1/3 py-2 mx-auto">
								<Button
									title="Adicionar ao carrinho"
									type="sun"
									url="/cart"
									tracking="normal"
									bold={false}
								/>
							</div>
							<p class="text-xs text-gray-500 mt-2">
								<a href="/" class="text-blue-500 underline">Saiba mais</a>
							</p>
						</div>
					</div>
				</div>

				<!-- Quick Offer -->
				<!-- <div class="relative">
                            <a href="#" class="not-hover-effect hidden md:block relative">
                                <picture>
                                    <source
                                        srcset="./images/happy-wine-home-desktop-mobile.webp"
                                        media="(max-width: 640px)"
                                    />

                                    <source
                                        srcset="./images/carousel/braaay-carousel-desktop-1.webp"
                                        media="(min-width: 768px)"
                                    />
                                    <img
                                        alt="oferta-do-mes"
                                        class="rounded-lg mb-5 mt-2 border border-grey-lighter opacity-90"
                                        src="/src/images/carousel/braaay-carousel-desktop-1.webp"
                                    />
                                </picture>
                                <div
                                    href="#"
                                    class="btn block absolute not-hover-effect hover:opacity-90 transition-all scale-90 bottom-2 right-2 border-0 text-white bg-blue uppercase md:items-center text-center mt-3 lg:mt-0 self-center"
                                >
                                    ADICIONAR AO CARRINHO
                                </div>
                            </a>
                        </div> -->
			</div>

			<div class="mt-8">
				<h2 class="text-[19px] font-prata ml-2 mb-4">Resumo da compra</h2>

				<div class="bg-white py-4 px-5 border border-grey-lighter rounded-lg">
					<div class="flex justify-between mt-2">
						<p class="font-light text-[15px] self-center">Sub-total (3 item)</p>
						<p class="font-roboto self-center">R$ 59,90</p>
					</div>
					<div class="my-4 border-t border-t-grey-lighter"></div>
					<div class="flex justify-between">
						<p class="font-light text-[15px] self-center">Cupom de desconto</p>
						<Button
							title="ADICIONAR"
							width="130px"
							url="/cart"
							size="sm-short"
							type="grey"
							borderDark={true}
							action={() => {
								alert('Popup. Adicionar cupom');
							}}
						>
							{#snippet icon()}
								<Gift class="lucide-button" />
							{/snippet}
						</Button>
					</div>
					<div class="my-4 border-t border-t-grey-lighter"></div>
					<div class="flex justify-between">
						<p class="font-light text-[15px] self-center">Frete</p>

						<Button
							title="CALCULAR"
							url="/cart"
							size="sm-short"
							width="130px"
							type="grey"
							borderDark={true}
							action={() => {
								alert('Popup. Calcular frete');
							}}
						>
							{#snippet icon()}
								<Truck class="lucide-button" />
							{/snippet}
						</Button>
					</div>

					<Divider color="blue" extraClasses="my-4 !border-b-grey-lighter" />
					<div class="flex justify-between pt-1 mb-2">
						<p class="font-roboto font-bold">Valor total</p>
						<div class="flex flex-col font-roboto text-right">
							<span class="font-bold text-[17px]">R$ 59,90 no Pix</span>

							<span class="text-sm text-[#28BA48] font-bold leading-4">
								ou 4x de R$ 5,99 sem juros
								<br />
								<a href="/"><u>+ 5% em CASHBACK</u></a>
							</span>
						</div>
					</div>
					<div class="my-4 mb-1">
						<Button
							type="sun"
							url="/checkout"
							title="FINALIZAR COMPRA"
							size="xl"
							tracking="normal"
							font="xl"
							bold={false}
						/>
					</div>
				</div>

				<!-- Promo clube lateral -->
				<div
					class="border bg-white rounded-md border-sun shadow-md p-6 max-w-sm mx-auto mt-6 md:hidden"
				>
					<div class="text-center">
						<h2 class="text-xl tracking-widest text-sun font-prata flex justify-center scale-90">
							<Sparkle class="pr-1" />
							<span>SEJA PASSPORT!</span>
							<Sparkle class="pl-1" />
						</h2>
						<p class="text-lg font-semibold mt-2 leading-[23px]">
							Ganhe 10% em cashback, fretes grátis + 3 vinhos todo mês!
						</p>
						<p class="text-xs text-grey-dark mt-3 leading-2">
							Junte-se ao APP do Clube e
							<strong>Economize, Ganhe, Diverta-se com vinho!</strong>
							Com cashbacks entre 5 e 10% em toda compra, 3 vinhos top todo mês + fretes grátis! Além
							de experiências com outros Passport e compras coletivas!
						</p>
						<div class="mx-11 py-2">
							<Button title="Adicionar ao carrinho" type="sun" url="/cart" tracking="normal" />
						</div>

						<p class="text-xs text-gray-500 mt-2">
							<a href="/" class="text-blue-500 underline">Saiba mais</a>
						</p>
					</div>
				</div>

				<!-- Extra cart elements -->
				<div class="mt-5">
					<h2 class="text-[19px] font-prata ml-2 mb-4">Entrega grátis</h2>
					<div class="bg-white py-3 px-5 border border-grey-lighter rounded-lg">
						<p class="text-xs mt-2 text-center">
							Faltam <strong>R$ 35,18</strong> para você conseguir frete grátis!
						</p>
						<div class="w-full bg-gray-200 rounded-full h-4 relative mb-2">
							<div
								class="bg-sun h-3 rounded-full transition-all duration-500 mt-3"
								style="width: 80%"
							></div>
							<span
								class="absolute inset-0 flex items-center justify-end pr-2 border-r border-r-grey-lighter text-[10px] font-semibold text-black"
							>
								80%
							</span>
						</div>
					</div>
					<Button
						title="Continuar comprando"
						size="sm"
						type="light"
						url="/category"
						tracking="normal"
					/>
				</div>

				<div class="hidden md:block md:my-36"></div>
			</div>
		</div>
	</div>
</main>
