<script lang="ts">
	// import { page } from '$app/state';
	import Button from '$components/ui/buttons/Button.svelte';
	import MoreInfoButton from '$components/ui/buttons/MoreInfoButton.svelte';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import { CircleUser, Coins, Heart, PackageOpen, User } from '@lucide/svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { logout } from '$lib/graphql/auth';
	import { redirectHref } from '$lib/utils';
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import { authState } from '$stores/auth.state.svelte';
	import { m } from '$lib/paraglide/messages';
	import { AppConfig } from '$config';
	import Meta from '$components/layout/Meta.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { beforeNavigate } from '$app/navigation';

	let returnUrl = $derived('/login/');
	let userName = $state('');
	let userEmail = $state('');
	authState.subscribe((auth) => {
		if (auth.user && auth.user.name && auth.user.email) {
			userName = auth.user.name;
			userEmail = auth.user.email;
		}
	});

	async function handleLogout() {
		// event.preventDefault();
		toggleLoader();
		let logoutResult = await logout();
		redirectHref(localizeHref(returnUrl));
	}

	// onNavigate(() => {
	// 	let currentPage = $derived(page.url);
	// 	alert(currentPage);
	// });
	let myFavoritesBold = $state(false);
	let myCashbackBold = $state(false);
	let myOrdersBold = $state(false);

	$effect(() => {
		const currentRoute = page.route?.id;

		// Update your bold states based on current route
		myFavoritesBold = currentRoute === '/account/my-favorites';
		myCashbackBold = currentRoute === '/account/my-cashback';
		myOrdersBold = currentRoute === '/account/my-orders';
	});

	let { children } = $props();
</script>

<Meta
	title="{m.seoMyAccountTitle()} {m.seoDivider()} {m.seoBase()}"
	description={m.seoMyAccountDescription()}
	noindex={true}
/>
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
							<span class="self-center align-middle pt-2 pb-2 pr-2">
								<!-- <User /> -->
								👋
							</span>
							<span
								class={[
									'self-center font-roboto font-extrabold align-bottom pt-0 text-left text-[18px] md:text-[22px] text-wrap',
									'md:max-w-max max-w-[87%] leading-tight pr-2 md:pr-0'
								]}>Olá, {userName}</span
							>
							<!-- <span
								class="self-center font-roboto font-extrabold align-bottom pt-1 text-left text-[18px] md:text-[22px] text-wrap truncate"
							>
								Olá, {userName}!
							</span> -->
						</div>
					</h1>
					<!-- <div
						class="flex flex-col gap-1 md:flex-row text-grey-medium-dark font-roboto text-[14px] antialiased"
					>
						<div>
							<MoreInfoButton
								title="Meu cashback"
								action={() => {
									alert('Popup!');
								}}
							/>
						</div>

					</div> -->
				</div>
				<div class="block">
					<img
						src="/images/my-account.png"
						alt="Uruguai"
						class="md:min-h-40 md:max-h-40 max-h-32 h-32 md:full-width-r object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
	<!-- My account -->
	<div class="flex flex-col md:flex-row max-w-screen-lg mx-auto">
		<!-- Left Sidebar -->
		<div class="border-r border-grey-lighter p-8 w-full md:w-1/4">
			<h1 class="text-lg font-bold mb-6">MENU</h1>
			<nav class="space-y-4">
				<div>
					<ul class="space-y-3 text-base">
						<li>
							<a href={localizeHref('/account/my-favorites/')} class="text-grey-blueish flex gap-1">
								<Heart class="w-4 h-4 self-center mr-2" fill="red" color="red" />
								<span class={[myFavoritesBold && 'font-bold']}> {m.myFavorites()} </span>
							</a>
						</li>
						<li>
							<a href={localizeHref('/account/my-cashback/')} class="text-grey-blueish flex gap-1">
								<Coins class="w-4 h-4 text-sun" fill="#BD8836" />
								<span class={[myCashbackBold && 'font-bold']}> Meu cashback </span>
							</a>
						</li>
						<li>
							<a href={localizeHref('/account/my-orders/')} class="text-grey-blueish flex gap-1">
								<PackageOpen class="w-4 h-4 self-center mr-2" />
								<span class={[myOrdersBold && 'font-bold']}> Meus pedidos </span>
							</a>
						</li>
						<li>
							<a
								onclick={(event) => {
									event.preventDefault();
									alert('Em breve');
								}}
								href={localizeHref('/account/my-orders/')}
								class="text-grey-blueish flex gap-1"
							>
								<CircleUser class="w-4 h-4 self-center mr-2" />
								<span> Meus dados </span>
							</a>
						</li>

						<!-- <li>
							<a href="/" class="text-grey-blueish">Meus endereços</a>
						</li>
						<li>
							<a href="/" class="text-grey-blueish font-bold border-b-2 pb-1 border-sun"
								>Detalhes da conta</a
							>
						</li>
						<li>
							<a href="/" class="text-grey-blueish">Preferências de e-mail</a>
						</li> -->
						<li>
							<div class="border-t border-grey-lighter my-5"></div>
						</li>
						<li>
							<a href={AppConfig.whatsappLink} class="text-grey-blueish"
								>Atendimento ao Cliente
								<span class="block text-sm font-sans font-bold">+55 11 94753-0340</span>
							</a>
						</li>
						<li>
							<div class="border-t border-grey-lighter my-5"></div>
						</li>
						<li class="border-b md:border-b-none border-grey-lighter pb-5">
							<Button title={m.accountExit()} action={() => handleLogout()} type="blue" />
						</li>
					</ul>
				</div>
			</nav>
		</div>

		<!-- Main Content Pane -->
		<div class="flex-1 p-8 pt-0 md:pt-8">
			<div class="grid gap-8">
				{@render children()}

				<!-- 			
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
						<Button
							type="sun"
							action={() => {
								alert('Submit');
							}}
							url="#"
							title="GUARDAR"
							size="md"
							rounded="lg"
							font="md"
							width="fit"
						/>
					</form>
				</div>

				<Divider color="blue" extraClasses="!my-0" />

			
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
						<Button
							type="sun"
							action={() => {
								alert('Submit');
							}}
							url="#"
							title="Alterar"
							size="md"
							rounded="lg"
							font="md"
							width="fit"
						/>
					</form>
				</div>

				<Divider color="green" extraClasses="!my-0" />

	
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
						<Button
							type="sun"
							action={() => alert('Submit')}
							url="#"
							title="Alterar"
							size="md"
							rounded="lg"
							font="md"
							width="fit"
						/>
					</form>
				</div> -->
			</div>
		</div>
	</div>
</main>

<FunMessageSection />
