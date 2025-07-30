<script lang="ts">
	import type { ArticleCreator } from '$lib/types/article-creator.types';
	interface Props {
		author: ArticleCreator;
	}

	let { author }: Props = $props();
</script>

<div class="bry-header-author z-0">
	<img src={author.avatar.url} alt={author.name} />
	<p class="text-lg font-bold mt-2 text-grey-darkest">{author.name}</p>
	<p class="text-sm mt-0 text-grey-darkest italic font-thin">Sommelier</p>
</div>
