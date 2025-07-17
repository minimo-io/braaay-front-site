<script lang="ts">
	// import { page } from '$app/state';
	import Button from '$components/ui/buttons/Button.svelte';
	import MoreInfoButton from '$components/ui/buttons/MoreInfoButton.svelte';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import { Coins, Heart, PackageOpen, User } from '@lucide/svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { logout } from '$lib/graphql/auth';
	import { redirectHref } from '$lib/utils';
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import { authState } from '$stores/auth.state.svelte';
	import { m } from '$lib/paraglide/messages';
	import { AppConfig } from '$config';
	import Meta from '$components/layout/Meta.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';

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
</script>

<Meta
	title="{m.seoMyAccountTitle()} {m.seoDivider()} {m.seoBase()}"
	description={m.seoMyAccountDescription()}
	noindex={true}
/>

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
			<label for="dob" class="block text-sm font-medium text-gray-700">Data de nascimento</label>
			<div class="flex space-x-2">
				<input type="text" placeholder="MM" class="w-16 p-2 border border-grey-light rounded" />
				<input type="text" placeholder="DD" class="w-16 p-2 border border-grey-light rounded" />
				<input type="text" placeholder="YYYY" class="w-24 p-2 border border-grey-light rounded" />
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
			<label for="new-password" class="block text-sm font-medium text-gray-700">Nova senha</label>
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
</div>
