<script>
	import Divider from '$components/ui/dividers/Divider.svelte';
	import { Check, CircleChevronDown, CircleUserRound, ShoppingBag, Sparkle } from '@lucide/svelte';
	import Button from '$components/ui/buttons/Button.svelte';
	import PrevNextButton from '$components/ui/buttons/PrevNextButton.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<main>
	<!-- Cart -->
	<div class="max-w-screen-lg mx-[10px] md:mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-0 md:gap-7">
			<div class="mt-8">
				<div class="flex justify-start mb-3 mx-3 md:mx-1">
					<h2 class="text-[19px] font-prata ml-1">Checkout</h2>
				</div>
				<!-- Resumo mobile -->
				<div
					class="block md:hidden bg-white py-2 mb-4 px-5 border border-grey-lighter rounded-lg mx-3"
				>
					<div class="flex justify-between">
						<p class="font-light text-[15px] self-center justify-center flex">
							<ShoppingBag class="pr-1 h-4 aspect-1 self-center text-sun" />
							<span class="font-bold font-roboto h-5 self-center">Resumo do carrinho</span>
						</p>
						<p class="font-roboto self-center flex">
							<span class="text-sm self-center font-bold">R$ 233</span>
							<CircleChevronDown class="pl-2 self-center text-sun" />
						</p>
					</div>
				</div>
				<div class="space-y-4 px-3 md:mb-24">
					<form class="mx-2 md:mx-auto">
						<!-- Ship to home or work -->
						<label class="flex items-center space-x-3">
							<input
								type="radio"
								name="recipient"
								class="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
								checked
							/>
							<span class="text-sm">Enviar para casa ou trabalho</span>
						</label>

						<!-- Local Pickup -->
						<label class="flex items-start space-x-3 mt-3">
							<input
								type="radio"
								name="recipient"
								class="w-5 h-5 text-sun border-grey-medium focus:ring-sun"
							/>
							<span class="flex flex-col">
								<span class="text-sm">Retirada no Showroom</span>
								<span class="text-xs text-grey-medium">
									Seg a Sex, das 09:00 às 18:30, exceto feriados
								</span>
							</span>
						</label>
					</form>

					<div>
						<Divider color="blue" extraClasses="!border-b-grey-lighter my-7" />
					</div>

					<!-- Step Done -->
					<div class="mx-auto p-6 border border-green-dark bg-green-light rounded-lg shadow-sm">
						<div class="flex justify-between items-center mb-4">
							<h2 class="text-base font-medium flex items-center text-green-medium">
								<span
									class="inline-flex items-center justify-center w-5 h-5 bg-green-medium text-grey-background rounded-full mr-2 text-xs"
								>
									<Check class="h-3" /></span
								>
								Conta
							</h2>
							<Button title="Alterar" type="light" url="/" size="xs" />
						</div>

						<form class="space-y-4 text-sm text-green-medium">
							<div>
								nicolas@minimo.io
								<br />
								<span>065.152.677-97</span><span> - (11) 96609-0456</span>
							</div>
						</form>
					</div>

					<!-- Form step 1 -->
					<div class="mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm">
						<div class="flex justify-between items-center mb-4">
							<h2 class="text-lg font-medium flex items-center">
								<span
									class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
									>1</span
								>
								Dados cadastrais
							</h2>
							<Button url="/" type="light" title="Fazer&nbsp;login" size="xs" minimalPx={true}>
								{#snippet icon()}
									<CircleUserRound class="lucide-button !px-0 !mx-0" />
								{/snippet}
							</Button>
						</div>

						<form class="space-y-4">
							<!-- Email -->
							<input
								type="email"
								placeholder="Digite o seu email"
								class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>

							<!-- Celular / WhatsApp -->
							<input
								type="text"
								placeholder="Celular / WhatsApp"
								class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>

							<!-- Nome e Sobrenome -->
							<div class="flex space-x-4">
								<input
									type="text"
									placeholder="Nome"
									class="w-1/2 px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
								/>
								<input
									type="text"
									placeholder="Sobrenome"
									class="w-1/2 px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
								/>
							</div>

							<!-- CPF -->
							<input
								type="text"
								placeholder="CPF"
								class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>

							<!-- Data de nascimento -->
							<input
								type="text"
								placeholder="Data de nascimento"
								class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>

							<!-- Botão de continuar -->
							<!-- <button
								type="submit"
								class="w-full text-sm px-4 py-2 bg-sun text-white font-medium rounded-lg border-grey-light focus:ring-2 focus:ring-sun focus:outline-none"
							>
								CONTINUAR →
							</button> -->
							<div class="py-1">
								<Button type="sun" url="#" title="CONTINUAR →" size="md" rounded="lg" font="md" />
							</div>
						</form>
					</div>

					<!-- Form step 2 -->
					<div
						class="opacity-50 pointer-events-none mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm"
					>
						<div class="flex justify-between items-center mb-4">
							<h2 class="text-lg font-medium flex items-center">
								<span
									class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
									>2</span
								>
								Entrega
							</h2>
						</div>

						<form class="space-y-4">Aguardando preenchimento dos dados pessoais</form>
					</div>

					<!-- Form step 3 -->
					<div
						class="opacity-50 pointer-events-none mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm"
					>
						<div class="flex justify-between items-center mb-4">
							<h2 class="text-lg font-medium flex items-center">
								<span
									class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
									>3</span
								>
								Pagamento
							</h2>
						</div>

						<form class="space-y-4">Aguardando seleção de frete.</form>
					</div>

					<!-- Form step 4 -->
					<div class="mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm">
						<div class="flex justify-between items-center mb-4">
							<h2 class="text-lg font-medium flex items-center">
								<span
									class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
									>4</span
								>
								Pagamento
							</h2>
						</div>

						<form class="">
							<div
								class="bg-grey-background border-grey-light border px-3 py-2 rounded-lg font-roboto mb-2"
							>
								<label class="flex justify-between text-sm">
									<div class="self-center flex">
										<input type="radio" tabindex="0" name="radio1" />
										<span class="ml-2 text-grey-blueish">PIX</span>
									</div>
									<div class="font-bold font-roboto">R$&nbsp;60,04</div>
								</label>
							</div>

							<div
								class="bg-grey-background border-grey-light mt-0 border px-3 py-2 rounded-lg font-roboto mb-2"
							>
								<label class="flex justify-between text-sm">
									<div class="self-center flex">
										<input type="radio" name="radio1" tabindex="0" />
										<span class="ml-2 text-grey-blueish">Boleto bancário</span>
									</div>
									<div class="font-bold font-roboto">R$&nbsp;60,04</div>
								</label>
							</div>

							<div
								class="bg-grey-background border-grey-light mt-0 border px-3 py-2 rounded-lg font-roboto mb-2"
							>
								<label class="flex justify-between text-sm">
									<div class="self-center flex">
										<input type="radio" name="radio1" tabindex="0" />
										<span class="ml-2 text-grey-blueish">Cartão de crédito</span>
									</div>
									<div class="font-bold font-roboto">R$&nbsp;60,04</div>
								</label>
							</div>

							<!-- Promocoes -->
							<div class="flex items-center text-sm my-5 px-3">
								<input type="checkbox" name="radio-promos" class="mr-2" checked />
								<label for="radio-promos">Quero receber novidades e promoções</label>
							</div>
							<!-- Offers controls -->
							<div class="flex items-center justify-between mb-2 pl-2">
								<div class="uppercase font-bold font-roboto text-sm">
									🎉&nbsp;&nbsp;Ofertas imperdíveis
								</div>
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
							<div
								class="bg-yellow-light border-grey-light border rounded-lg border-dashed p-5 mb-2"
							>
								<div class="flex justify-center align-middle">
									<div class="flex flex-col md:flex-row">
										<div class="md:border-r md:border-dashed md:border-grey-light md:mr-4 md:pr-4">
											<div class="flex items-center md:mx-auto md:justify-center">
												<img
													src="/images/wines/Deica-2-1.webp"
													alt="Signos Malbec"
													class="mr-4 h-20"
												/>
												<div>
													<h2 class="font-bold leading-none mb-1 text-[14px]">Signos Malbec</h2>
													<div>
														<span class="text-grey-dark line-through text-[14px]"> R$ 79,90 </span>
														<span class="text-green-dark font-bold ml-2 text-[14px]">
															R$ 44,90</span
														>
													</div>
												</div>
											</div>
											<div class="bry-dashed-line my-5"></div>
											<p class="font-bold text-sm text-left md:text-center">Oferta imperdível!</p>
											<p class="mt-2 text-xs text-left md:text-center">
												Não perca a oportunidade, adquira agora esta promoção exclusiva.
											</p>

											<div class="mt-4">
												<Button
													title="Adicionar ao carrinho"
													rounded="lg"
													type="light"
													size="sm"
													url="/"
												>
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
													<h2 class="font-bold text-[14px] leading-none mb-1">
														Don Pascual Cabernet Sauvignon
													</h2>
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
												<Button
													title="Adicionar ao carrinho"
													rounded="lg"
													type="light"
													size="sm"
													url="/"
												>
													{#snippet icon()}
														<!-- <Headset class="lucide-button" /> -->
													{/snippet}
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Botão de continuar -->
							<!-- <button
								type="submit"
								class="w-full mt-2 text-sm px-4 py-3 bg-sun text-white font-medium rounded-lg border-grey-light focus:ring-2 focus:ring-sun focus:outline-none"
							>
								FINALIZAR COMPRA
							</button> -->
							<div class="py-3">
								<Button
									type="sun"
									url="#"
									action={() => {
										alert('Submit');
									}}
									title="FINALIZAR COMPRA"
									size="xl"
									rounded="lg"
									font="md"
								/>
							</div>
						</form>

						<!-- Promo -->
						<div
							class="border bg-white rounded-md border-sun shadow-md p-6 max-w-sm md:mx-auto mt-4 md:hidden"
						>
							<div class="text-center">
								<h2
									class="text-xl tracking-widest text-sun font-prata flex justify-center scale-90"
								>
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
									Com cashbacks entre 5 e 10% em toda compra, 3 vinhos top todo mês + fretes grátis!
									Além de experiências com outros Passport e compras coletivas!
								</p>
								<div class="mx-10 py-2">
									<Button
										title="Adicionar ao carrinho"
										type="sun"
										url={localizeHref('/cart/')}
										tracking="normal"
									/>
								</div>
								<p class="text-xs text-gray-500 mt-2">
									<a href="/" class="text-blue-500 underline">Saiba mais</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-8">
				<!-- Promo clube -->
				<div
					class="hidden md:block border bg-white rounded-md border-sun shadow-md p-6 max-w-sm mx-3 md:mx-auto md:mt-2"
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
							de experiências com outros Passport e compras coletivas!!
						</p>
						<div class="mx-11 py-2">
							<Button
								title="Adicionar ao carrinho"
								type="sun"
								url={localizeHref('/cart/')}
								tracking="normal"
							/>
						</div>
						<p class="text-xs text-gray-500 mt-2">
							<a href="/" class="text-blue-500 underline">Saiba mais</a>
						</p>
					</div>
				</div>

				<!-- Extra cart elements -->
				<div class="mt-5">
					<!-- <h2 class="text-[19px] font-prata ml-2 mb-4">
                        Resumo da compra
                    </h2> -->

					<div class="hidden md:block bg-white py-4 px-5 border border-grey-lighter rounded-lg">
						<div class="flex justify-between mt-2">
							<p class="font-light text-[15px] self-center">Sub-total (3 item)</p>
							<p class="font-roboto self-center">R$ 59,90</p>
						</div>
						<div class="my-4 border-t border-t-grey-lighter"></div>
						<div class="flex justify-between mt-2">
							<p class="font-light text-[15px] self-center">Entrega</p>
							<p class="font-roboto self-center">A calcular</p>
						</div>
						<!-- <div class="flex justify-between">
                            <p
                                class="font-light text-[15px] self-center"
                            >
                                Cupom de desconto
                            </p>
                            <a
                                href="/"
                                class="btn !px-3 w-[130px] text-grey-blueish bg-grey-background uppercase flex lg:items-right mt-3 lg:mt-0 self-center"
                            >
                                <i
                                    data-lucide="gift"
                                    class="lucide-button"
                                ></i>
                                ADICIONAR
                            </a>
                        </div> -->
						<!-- <div
                            class="my-4 border-t border-t-grey-lighter"
                        ></div> -->
						<!-- <div class="flex justify-between">
                            <p
                                class="font-light text-[15px] self-center"
                            >
                                Frete
                            </p>
                            <a
                                href="/"
                                class="btn !px-3 w-[130px] text-grey-blueish bg-grey-background uppercase flex lg:items-right mt-3 lg:mt-0 self-center"
                            >
                                <i
                                    data-lucide="truck"
                                    class="lucide-button"
                                ></i>
                                CALCULAR
                            </a>
                        </div> -->
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
						<div class="py-2 mt-4 px-5 border border-grey-lighter rounded-full bg-grey-background">
							<a
								href={localizeHref('/cart/')}
								class="mt-0 block text-sm font-roboto hover:underline text-center"
								>Voltar ao carrinho</a
							>
						</div>
						<a
							href="/"
							class="bg-white text-xs block text-center font-roboto text-grey-blueish py-2 px-4 rounded-full w-full mt-2"
						>
							Continuar comprando
						</a>
					</div>
				</div>

				<div class="hidden md:block md:my-36"></div>
			</div>
		</div>
	</div>
</main>
