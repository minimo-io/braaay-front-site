<script lang="ts">
	import { Wine, CalendarDays, Gift, Award, Leaf, PackageOpen } from 'lucide-svelte';
</script>

<div class="bry-secondary-menu">
	<nav class="container max-w-screen-lg py-2 mx-[30px] lg:mx-auto">
		<ul class="flex space-x-4">
			<li class="md:!ml-0 relative group transition-all duration-300">
				<a href="/category" class="!pr-2 !lg:pr-3 md:!pl-0">
					<Wine class="lucide-menu" />
					Vinhos
				</a>
			</li>
			<li class="relative group transition-all duration-300">
				<a href="/kits/">
					<Gift class="lucide-menu" />
					Presentes
				</a>
			</li>
			<li class="relative group transition-all duration-300">
				<a href="/kits/">
					<PackageOpen class="lucide-menu" />
					Kits
				</a>
			</li>
			<li class="relative group transition-all duration-300">
				<a href="https://braaay.com/experiencias/">
					<CalendarDays class="lucide-menu" />
					Experiências
				</a>
			</li>
			<li class="self-center text-grey-medium antialiased">/</li>
			<li class="relative group transition-all duration-300">
				<a href="/tag/oportunidades/" class="font-bold">
					<span class="text-bra flex self-center">
						<Leaf class="lucide-menu self-center text-bra" />
						Orgânicos
					</span>
				</a>
			</li>
			<li class="relative group transition-all duration-300">
				<a href="/tag/premiados/" class="!pr-5">
					<Award class="lucide-menu" />
					Premiados
				</a>
			</li>

			<!-- <li class="relative group transition-all duration-300">
					<a href="/em-breve/">
						<GraduationCap class="lucide-menu badge-percent" />
						Cursos
					</a>
				</li> -->
			<!-- <li class="relative group transition-all duration-300">
					<a href="/blog">
						<Newspaper class="lucide-menu badge-percent" />
						Blog
					</a>
				</li> -->
			<li
				class="!ml-0 md:!ml-5 relative group transition-all duration-300 animate__animated animate__swing order-first md:order-none"
			>
				<a href="/blog" class="!py-0 !pr-5 !pl-0 h-full">
					<!-- <BadgePercent class="lucide-menu badge-percent" color="white" fill="#000" /> -->
					<img
						src="/images/badge-offer.png"
						alt="sale-badge"
						width="40px"
						height="40px"
						class="pr-3"
					/>
					<div class="flex flex-col gap-0 self-center">
						<span class="text-xs text-left leading-none">Compre por</span>
						<span class="text-sm font-bold text-left leading-5">R$30 ou menos</span>
					</div>
				</a>
			</li>
		</ul>
	</nav>
</div>
