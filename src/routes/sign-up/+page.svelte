<script lang="ts">
	import Button from '$components/ui/buttons/Button.svelte';
	import { CheckCheck, User, Lock, EyeOff, Eye } from '@lucide/svelte';
	import DrawerAccount from '$components/ui/drawer/DrawerAccount.svelte';
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import SignupBenefits from '$components/ui/SignupBenefits.svelte';
	import Meta from '$components/layout/Meta.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import {
		alphaOnly,
		isValidBirthDate,
		isValidCellphone,
		isValidEmail,
		launchToast,
		redirectHref
	} from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import IMask from 'imask';
	import { fade, slide } from 'svelte/transition';
	import { login, signup } from '$lib/graphql/auth';
	import { cpf } from 'cpf-cnpj-validator';

	// Some local type
	type ValidationResult = { valid: true } | { valid: false; errors: { [field: string]: string } };

	// Local states
	let processing = $state(false);
	let error = $state('');
	let showPassword = $state(false);

	// Password field
	let password = $state('');

	// CPF Mask
	let cpfMask: any;
	let cpfInputElement: HTMLInputElement;
	let cpfValue = $state('');
	const cpfPlaceholder = '000.000.000-00';

	// Email
	let emailValue = $state('');

	// No longer using emailMask
	let firstName = $state('');
	let lastName = $state('');

	// Date Mask
	let birthDateValue = $state('');
	let birthDateInputElement: HTMLInputElement;
	let birthDateMask: any;
	const datePlaceholder = 'DD/MM/AAAA';

	// phone imask
	let phoneMask: any;
	let phoneInputElement: HTMLInputElement;
	let phoneValue = $state('');
	// const phonePlaceholderLandline = '(00) 0000-0000';
	const phonePlaceholderMobile = '(00) 0 0000-0000';

	onMount(() => {
		// Phone Mask
		phoneMask = IMask(phoneInputElement, {
			mask: [
				// { mask: phonePlaceholderLandline }, // Landline (8 digits)
				phonePlaceholderMobile // Mobile (9 digits)
			]
			// dispatch: (appended, dynamicMasked) => {
			// 	const number = dynamicMasked.unmaskedValue.replace(/\D/g, '');
			// 	return number.length > 10 ? dynamicMasked.compiledMasks[1] : dynamicMasked.compiledMasks[0];
			// }
		});
		if (phoneValue) phoneMask.unmaskedValue = phoneValue;
		phoneMask.on('accept', () => (phoneValue = phoneMask.unmaskedValue));

		// CPF Mask
		cpfMask = IMask(cpfInputElement, {
			mask: cpfPlaceholder
		});

		if (cpfValue) cpfMask.unmaskedValue = cpfValue;
		cpfMask.on('accept', () => (cpfValue = cpfMask.unmaskedValue));

		// Date Mask
		birthDateMask = IMask(birthDateInputElement, {
			mask: Date,
			pattern: datePlaceholder,
			blocks: {
				DD: {
					mask: IMask.MaskedRange,
					from: 1,
					to: 31,
					maxLength: 2
				},
				MM: {
					mask: IMask.MaskedRange,
					from: 1,
					to: 12,
					maxLength: 2
				},
				AAAA: {
					mask: IMask.MaskedRange,
					from: 1900,
					to: new Date().getFullYear(),
					maxLength: 4
				}
			},
			format: function (date) {
				const day = String(date.getDate()).padStart(2, '0');
				const month = String(date.getMonth() + 1).padStart(2, '0');
				return `${day}/${month}/${date.getFullYear()}`;
			},
			parse: function (str) {
				const [day, month, year] = str.split('/');
				return new Date(Number(year), Number(month) - 1, Number(day));
			},
			overwrite: true,
			autofix: true
		});

		// Set initial value if available
		if (birthDateValue) {
			// Format date as DD/MM/YYYY if it's in raw format
			if (!birthDateValue.includes('/')) {
				const day = birthDateValue.substring(0, 2);
				const month = birthDateValue.substring(2, 4);
				const year = birthDateValue.substring(4);
				birthDateInputElement.value = `${day}/${month}/${year}`;
			} else {
				birthDateInputElement.value = birthDateValue;
			}
		}

		// Store formatted value on change
		birthDateMask.on('accept', () => {
			// const rawValue = birthDateMask.unmaskedValue;
			const formattedValue = birthDateInputElement.value;
			birthDateValue = formattedValue; // Store formatted value instead of raw
		});
	});

	onDestroy(() => {
		cpfMask?.destroy();
		birthDateMask?.destroy();
	});

	// Add this function to toggle password visibility
	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	// Handle the login form submission
	async function handleSignUp(event) {
		event.preventDefault();
		processing = true;
		toggleLoader();
		document.body.classList.toggle('no-scroll');
		try {
			const frmValues = {
				username: emailValue,
				email: emailValue,
				cpf: cpfValue,
				telephone: phoneValue,
				birthDate: birthDateValue,
				password,
				firstName,
				lastName
			};

			// Validate
			const validation = validateCheckoutStepOne(frmValues);
			if (validation.valid) {
				// Send the signup request
				let signUpResult = await signup(frmValues);
				if (signUpResult && signUpResult.success) {
					error = '';
					const url = new URL(window.location.href);
					const returnUrl = url.searchParams.get('returnUrl');

					// After signup > auto-login -----------------------------------------------------------------------
					launchToast('Bem-vindo!', 'success', 3000);
					let loginResult = await login(frmValues.email, frmValues.password);
					if (loginResult && loginResult.success) {
						const url = new URL(window.location.href);
						const returnUrl = url.searchParams.get('returnUrl');
						// if there is a return url then redirect there else to wines
						if (returnUrl) {
							redirectHref(localizeHref(returnUrl));
						} else {
							if (getLocale() == 'pt') {
								redirectHref(localizeHref('/vinhos/'));
							} else {
								redirectHref(localizeHref('/uy/cervezas/'));
							}
						}
					} else {
						// if the login does not work then goto login form
						if (returnUrl) {
							redirectHref(localizeHref(returnUrl));
						} else {
							redirectHref(localizeHref('/login/'));
						}
					}
					// -------------------------------------------------------------------------------------------------
				} else {
					error = signUpResult.message;
					processing = false;
					toggleLoader();
					document.body.classList.toggle('no-scroll');
				}
			} else {
				document.body.classList.toggle('no-scroll');
				toggleLoader();
				processing = false;
				Object.values(validation.errors).forEach((msg) => launchToast(msg, 'error', 2000));
			}
		} catch (error) {
			processing = false;

			toggleLoader();
			document.body.classList.toggle('no-scroll');
		}
	}

	function validateCheckoutStepOne(values: {
		username: string;
		email: string;
		cpf: string;
		telephone: string;
		birthDate: string;
		password: string;
		firstName: string;
		lastName: string;
	}): ValidationResult {
		const errors: { [key: string]: string } = {};

		// Username (usuário/login)
		// if (values.username.trim() === '') {
		// 	errors.username = m.signUpNoUsername();
		// } else if (!/^[a-zA-Z0-9_.-]{5,20}$/.test(values.username)) {
		// 	errors.username = m.signUpInvalidUsername();
		// }

		// Email
		if (values.email.trim() === '') {
			errors.email = m.checkoutStep1NoEmail();
		} else if (!isValidEmail(values.email)) {
			errors.email = m.checkoutStep1EnterValidEmail();
		}

		// CPF
		if (!cpf.isValid(values.cpf)) {
			errors.cpf = m.signUpInvalidCpf();
		}

		// Telephone
		if (values.telephone.trim() === '') {
			errors.telephone = m.checkoutStep1NoTel();
		} else if (!isValidCellphone(values.telephone, getLocale())) {
			errors.telephone = m.signUpTelephoneInvalid();
		}

		// Birth date (string válida para Date.parse)
		if (values.birthDate.trim() === '') {
			errors.birthDate = m.checkoutStep1NoBirthDate();
			// } else if (isNaN(Date.parse(values.birthDate))) {
		} else if (!isValidBirthDate(values.birthDate)) {
			errors.birthDate = m.checkoutStep1BirthDateInvalid();
		}

		// Password (mínimo 6 caracteres)
		if (values.password.trim() === '') {
			errors.password = m.signUpNoPassword();
		} else if (values.password.length < 6) {
			errors.password = m.signUpPasswordTooShort();
		}

		// First name
		if (values.firstName.trim() === '') {
			errors.firstName = m.checkoutStep1NoFirstname();
		}

		// Last name
		if (values.lastName.trim() === '') {
			errors.lastName = m.checkoutStep1NoLastname();
		}

		return Object.keys(errors).length > 0 ? { valid: false, errors } : { valid: true };
	}
</script>

<Meta title={m.seoSignUpTitle()} description={m.seoSignUpDescription()} />

<main class="w-full mx-auto">
	<!-- Header menu -->
	<div class="bg-white border-b border-b-grey-lighter">
		<!-- Category Header -->
		<div class="max-w-screen-lg border-sky bg-gray-100 md:mx-auto">
			<div class="flex flex-col md:flex-row items-center md:min-h-40 relative">
				<div
					class="flex justify-between items-center text-right md:text-left md:items-start md:justify-normal flex-row md:flex-col w-full md:w-[55%] py-[0.5rem] md:py-[20px] mx-[30px] px-[30px] md:pl-0"
				>
					<h1
						class="font-prata uppercase text-[25px] my-1 font-light text-grey-dark tracking-wider antialiased"
					>
						<div class="flex">
							<span class="self-center align-top pt-2 pb-2 pr-2">
								<User />
							</span>
							<span
								class="self-center font-roboto font-extrabold align-bottom pt-1 text-left text-[18px] md:text-[22px] text-wrap"
							>
								CADASTRE-SE
							</span>
						</div>
					</h1>
				</div>
				<div class="block">
					<img
						src="/images/sign-up-2.jpeg"
						alt="minha-conta"
						class="md:min-h-40 md:max-h-40 max-h-32 h-32 md:full-width-r object-cover"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Login -->
	<div in:fade={{ duration: 200 }} class="flex flex-col md:flex-row max-w-screen-lg mx-auto">
		<div class=" my-2 mx-auto md:w-[60%] md:border-r md:border-grey-lighter">
			<!-- <DrawerAccount showBottomBorder={false} /> -->

			<form onsubmit={handleSignUp} class="space-y-3 py-5 px-10">
				<!-- Email -->
				<fieldset>
					<label for="signup-email" class="text-sm font-bold">Email</label>
					<input
						id="signup-email"
						bind:value={emailValue}
						type="email"
						required
						placeholder="Digite o seu email"
						class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
					/>
				</fieldset>

				<!-- Password -->
				<fieldset>
					<label for="password" class="text-sm font-bold">Senha</label>
					<div class="relative mt-1">
						<input
							id="password"
							name="password"
							type={showPassword ? 'text' : 'password'}
							bind:value={password}
							disabled={processing}
							required
							class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
							placeholder="Sua senha"
						/>

						<button
							type="button"
							class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
							onclick={togglePasswordVisibility}
						>
							{#if showPassword}
								<EyeOff class="h-5" />
							{:else}
								<Eye class="h-5" />
							{/if}
						</button>
					</div>
				</fieldset>

				<!-- Celular / WhatsApp -->
				<fieldset>
					<label for="signup-phone" class="text-sm font-bold">Celular / WhatsApp</label>
					<input
						id="signup-phone"
						bind:this={phoneInputElement}
						type="tel"
						placeholder="(00) 0 0000-0000"
						required
						class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
					/>
				</fieldset>

				<!-- Nome e Sobrenome -->
				<div class="flex space-x-4">
					<fieldset class="w-1/2">
						<label for="signup-firstname" class="text-sm font-bold">Nome</label>
						<input
							id="signup-firstname"
							use:alphaOnly
							bind:value={firstName}
							maxlength="20"
							type="text"
							placeholder="Nome"
							required
							class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
						/>
					</fieldset>
					<fieldset class="w-1/2">
						<label for="signup-lastname" class="text-sm font-bold">Sobrenome</label>
						<input
							id="signup-lastname"
							use:alphaOnly
							bind:value={lastName}
							maxlength="20"
							type="text"
							placeholder="Sobrenome"
							required
							class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
						/>
					</fieldset>
				</div>

				<div class="flex space-x-4">
					<!-- CPF -->
					<fieldset class="w-1/2">
						<label for="signup-cpf" class="text-sm font-bold">CPF</label>
						<input
							id="signup-cpf"
							bind:this={cpfInputElement}
							type="tel"
							placeholder={cpfPlaceholder}
							required
							class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
						/>
					</fieldset>

					<!-- Data de nascimento -->
					<fieldset class="w-1/2">
						<label for="signup-birthdate" class="text-sm font-bold">Data de Nascimento</label>
						<input
							id="signup-birthdate"
							bind:this={birthDateInputElement}
							type="tel"
							placeholder={datePlaceholder}
							required
							class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
						/>
					</fieldset>
				</div>

				<!-- Next -->
				<div class="py-1">
					<Button
						action={handleSignUp}
						type="sun"
						title="Criar conta grátis"
						size="md"
						rounded="lg"
						font="md"
					>
						{#snippet icon()}
							<Lock class="h-4" />
						{/snippet}
					</Button>
				</div>
				{#if error}
					<div class="text-red-medium font-bold text-sm pt-4 text-center md:text-left">{error}</div>
				{/if}

				<div class="text-xs md:text-sm text-center md:text-left">
					<a class="" href={localizeHref('/login/')}
						>Já tem conta? <span class="font-bold underline">Faça login</span></a
					>
				</div>
			</form>
		</div>
		<div
			class="hidden md:inline px-[35px] w-full md:flex-1 md:justify-center flex-row text-center h-full self-center py-10 text-sm"
		>
			<div class="text-center flex flex-col p-0 md:px-9 font-bold">
				<!-- <Info class="h-5 self-center" /> -->

				<div class="scale-100">
					<SignupBenefits />
				</div>
			</div>
		</div>
	</div>
</main>

<FunMessageSection />
