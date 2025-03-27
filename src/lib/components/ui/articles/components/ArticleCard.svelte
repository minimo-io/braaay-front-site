<!-- Card -->
<script lang="ts">
	interface Props {
		author: {
			name: string;
			image: string;
		};
		date: string;
		title: string;
		category: {
			url: string;
			title: string;
		};
		readingTime: string;
		image: string;
		url: string;
	}

	let props: Props = $props();
</script>

<div class="bg-white rounded-lg shadow overflow-hidden">
	<div class="relative">
		<img src={props.image} alt={JSON.stringify(props.title)} class="w-full h-48 object-cover" />
		<a href={props.url} class="absolute top-2 right-2 rounded-full p-2 shadow" aria-label="Article">
			<i data-lucide="zoom-in" class="text-white"></i>
		</a>
	</div>
	<div class="p-5">
		<div class="text-sm text-grey-medium font-light mb-2 flex items-center">
			<img
				src={props.author.image}
				alt={JSON.stringify(props.author.name)}
				class="w-6 h-6 rounded-full mr-2"
			/>
			{props.author.name} • {props.date}
		</div>
		<h3 class="text-lg font-prata font-normal my-2">
			<a href={props.url} class="hover:text-red-600 uppercase">{props.title}</a>
		</h3>

		<div class="text-sm mt-2">
			<a href={props.category.url} class="font-bold text-sun">{props.category.title}</a>
			<span class="text-grey-medium-dark">•</span>
			<span class="text-sm font-light text-grey-medium my-2"> {props.readingTime} </span>
		</div>
	</div>
</div>
