<script>
	import Divider from '$components/ui/Divider.svelte';
	import { User } from 'lucide-svelte';
</script>

<main class="w-full mx-auto">
	<!-- Header menu -->
	<div class="bg-white border-b border-b-grey-lighter">
		<!-- Category Header -->
		<div class="max-w-screen-lg border-sky bg-gray-100 md:mx-auto">
			<div class="flex flex-col md:flex-row items-center md:min-h-40 relative">
				<div
					class="flex justify-between items-center text-right md:text-left md:items-start md:justify-normal flex-row md:flex-col w-full md:w-[55%] py-4 md:py-[20px] mx-[30px] px-[30px] md:pl-0"
				>
					<h1
						class="font-prata uppercase text-[25px] my-1 font-light text-grey-dark tracking-wider antialiased"
					>
						<div class="flex">
							<span class="self-center align-top pb-2 pr-2">
								<User />
							</span>
							<span class="self-center align-top text-lg md:text-2xl"> MINHA CONTA </span>
						</div>
					</h1>
					<div
						class="flex flex-col gap-1 md:flex-row text-grey-medium-dark font-roboto text-[14px] antialiased"
					>
						<span>3641 pontos</span>
						<button
							class="font-roboto text-grey-medium-dark font-[11px] text-xs border border-grey-light py-[3px] px-[7px] antialiased ml-2 rounded-md"
						>
							SAIBA MAIS
						</button>
					</div>
				</div>
				<div class="block">
					<img
						src="./images/my-account.png"
						alt="Uruguai"
						class="md:min-h-40 md:max-h-40 max-h-40 h-40 md:full-width-r object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
	<!-- My account -->
	<div class="flex flex-col md:flex-row max-w-screen-lg mx-auto">
		<!-- Left Sidebar -->
		<div class="border-r border-grey-lighter p-8 w-full md:w-1/4">
			<h1 class="text-lg font-bold mb-6">Olá, Erika</h1>
			<nav class="space-y-4">
				<div>
					<ul class="space-y-3 text-base">
						<li>
							<a href="/" class="text-grey-blueish">Meus pedidos</a>
						</li>
						<li>
							<a href="/" class="text-grey-blueish">Meus endereços</a>
						</li>
						<li>
							<a href="/" class="text-grey-blueish font-bold border-b-2 pb-1 border-sun"
								>Detalhes da conta</a
							>
						</li>
						<li>
							<a href="/" class="text-grey-blueish">Preferências de e-mail</a>
						</li>
						<li>
							<div class="border-t border-grey-lighter my-5"></div>
						</li>
						<li>
							<a href="https://wa.me/5511947530340" class="text-grey-blueish"
								>Atendimento ao Cliente
								<span class="block text-sm font-sans font-bold">+55 11 94753-0340</span>
							</a>
						</li>
						<li>
							<div class="border-t border-grey-lighter my-5"></div>
						</li>
						<li class="border-b md:border-b-none border-grey-lighter pb-5">
							<a href="/" class="btn block text-center text-sm text-grey-blueish">Sair da conta</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>

		<!-- Main Content Pane -->
		<div class="flex-1 p-8 pt-0 md:pt-8">
			<div class="grid gap-8">
				<!-- Account Info Section -->
				<div>
					<h2 class="text-xl mb-4 font-prata">Detalhes da conta</h2>
					<form class="space-y-4">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
							<input
								id="name"
								type="text"
								value="Erika Bezerra"
								class="w-full mt-1 p-2 border border-grey-light rounded"
							/>
						</div>
						<div>
							<label for="dob" class="block text-sm font-medium text-gray-700"
								>Data de nascimento</label
							>
							<div class="flex space-x-2">
								<input
									type="text"
									placeholder="MM"
									class="w-16 p-2 border border-grey-light rounded"
								/>
								<input
									type="text"
									placeholder="DD"
									class="w-16 p-2 border border-grey-light rounded"
								/>
								<input
									type="text"
									placeholder="YYYY"
									class="w-24 p-2 border border-grey-light rounded"
								/>
							</div>
						</div>
						<button type="submit" class="bg-sun text-white py-2 px-4 rounded">Guardar</button>
					</form>
				</div>

				<Divider color="blue" extraClasses="!my-0" />

				<!-- Change Email Section -->
				<div class="">
					<h2 class="text-xl font-prata mb-4">Trocar email</h2>
					<form class="space-y-4">
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
							<input
								id="email"
								type="email"
								value="erika@braaay.com"
								class="w-full mt-1 p-2 border border-grey-light rounded"
							/>
						</div>
						<button type="submit" class="bg-sun text-white py-2 px-4 rounded">Alterar</button>
					</form>
				</div>

				<Divider color="green" extraClasses="!my-0" />

				<!-- Change Password Section -->
				<div>
					<h2 class="text-xl font-prata mb-4">Alterar a senha</h2>
					<form class="space-y-4">
						<div>
							<label for="current-password" class="block text-sm font-medium text-gray-700"
								>Senha atual</label
							>
							<input
								id="current-password"
								type="password"
								class="w-full mt-1 p-2 border border-grey-light rounded"
							/>
						</div>
						<div>
							<label for="new-password" class="block text-sm font-medium text-gray-700"
								>Nova senha</label
							>
							<input
								id="new-password"
								type="password"
								class="w-full mt-1 p-2 border border-grey-light rounded"
							/>
						</div>
						<button type="submit" class="bg-sun text-white py-2 px-4 rounded">Alterar</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</main>

<div
	class="bg-white border-t border-b border-grey-lighter w-full text-center py-10 text-grey-blueish"
>
	Obrigado por ser genial 😀
</div>
