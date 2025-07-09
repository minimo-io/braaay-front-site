<!-- src/routes/[categorySlug]/+page.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import { toggleLoader } from '$stores/loaderStore.state.svelte.js';
	import {
		type Category,
		type Product,
		type Post,
		type ArticleCreator,
		type Pagination,
		type YoastSeoData
	} from '$lib/types';
	import GlobalCategory from '$components/layout/GlobalCategory.svelte';
	import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import LoadMoreButton from '$components/ui/buttons/LoadMoreButton.svelte';
	import { loadMoreProducts } from '$lib/utils/loadMoreProducts.util.js';
	import { CATEGORY_PRODUCTS } from '$lib/graphql/queries/products-category.query.js';
	import Meta from '$components/layout/Meta.svelte';
	import { m } from '$lib/paraglide/messages.js';

	const { data } = $props();

	let products: Product[] = $state(data.products);

	let pagination: Pagination = $state(data.pagination);
	let seo: YoastSeoData = $state({
		title: m.seoOnSaleTitle(),
		metaDesc: m.seoOnSaleDescription(),
		canonical: '',
		metaRobotsNoindex: 'index',
		metaRobotsNofollow: 'follow',
		opengraphTitle: m.seoOnSaleTitle(),
		opengraphDescription: m.seoOnSaleDescription()
	});
	let category: Category = $state({
		name: m.onSale(),
		description: m.seoOnSaleDescription(),
		count: 10,
		seo: seo,
		header: {
			title: m.onSale()
		}
	});
	let isLoading = $state(false);

	$effect(() => {
		products = data.products;
		// category = data.category;
		pagination = data.pagination;
	});

	// let article: Post = $derived({
	// 	id: '0',
	// 	title: category.header.title || category.name,
	// 	date: '',
	// 	modified: '',
	// 	excerpt: '',
	// 	content: category.description,
	// 	plainExcerpt: '',
	// 	uri: '',
	// 	header: {
	// 		title: category.header.firstTitle,
	// 		content: category.header.firstParagraph
	// 	},
	// 	author: products![0].author as ArticleCreator,
	// 	featuredImage: {
	// 		mediaItemUrl: category.header.image?.url || '',
	// 		altText: category.header.image?.altText || ''
	// 	}
	// });

	async function handleLoadMore() {
		if (isLoading) return;
		isLoading = true;
		toggleLoader();
		try {
			// Determine current category slug
			const { categorySlug, subcategorySlug } = page.params;
			const currentCategorySlug =
				subcategorySlug && subcategorySlug !== '' ? subcategorySlug : categorySlug;

			// Use the abstracted function.
			const result = await loadMoreProducts({
				products,
				pagination,
				query: CATEGORY_PRODUCTS,
				params: {
					categorySlug: categorySlug,
					categoryId: categorySlug
				}
			});

			products = result.products;
			pagination = result.pagination;
		} catch (err) {
			// Handle the error as needed
			console.error(err);
		} finally {
			isLoading = false;
			toggleLoader();
		}
	}
</script>

<Meta seoData={seo} />

<GlobalCategory {products} {category} />
<LoadMoreButton {isLoading} {pagination} {handleLoadMore} />

<!-- <BottomArticle {article} twoColumns={false} /> -->
