<script>
	import { AppConfig } from '$config';
	import { m } from '$lib/paraglide/messages';
	import { Coins, Headset } from '@lucide/svelte';
</script>

<div>
	<div class="flex justify-between">
		<h2 class="hidden text-xl mb-4 font-prata md:flex gap-1 items-center">
			<Coins class="w-5 h-5 self-center mr-2 mb-[5px]" />
			<span>{m.myCashback()}</span>
		</h2>
		<div class="relative block">
			<a
				class="flex items-center bg-transparent border bg-white border-grey-lighter -top-1 relative text-grey-medium-dark py-2 px-2 rounded-lg scale-90 md:scale-100"
				href={AppConfig.whatsappLink}
				rel="nofollow noopener"
				target="_blank"
			>
				<Headset class="h-[15px]" />
				<span class="text-xs mr-1">{m.contactUs()}</span>
			</a>
		</div>
	</div>

	<div class="text-sm mt-2 md:mt-0">
		{m.comingSoonUseCashback()}
	</div>
</div>

<!-- <Divider color="blue" extraClasses="!my-0" /> -->
