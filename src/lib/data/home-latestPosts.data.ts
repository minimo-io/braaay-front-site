// import { m } from '$lib/paraglide/messages';
import type { Locale } from '$lib/paraglide/runtime';
import type { PostBaseCategory } from '$lib/types';

export const HomeLatestPosts = (locale: Locale = 'pt') => {
	if (locale == 'pt') {
		return [];
	} else if (locale == 'uy') {
		return [
			{
				url: '/uy/blog/hops-es-comprada-y-re-lanza-cervezas-artesanales-vinos-uruguayos/',
				media:
					'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/10/cerveza-artesanal-vs-vino-uruguayo.jpg',
				title: 'Hops (ahora BRAAAY) es comprada ¡y re-lanza!',
				date: '2024-10-30T21:24:44',
				author: {
					name: 'BRAAAY',
					image:
						'https://api.braaay.com/wp-content/uploads/2024/10/cropped-braaay-map-logo-96x96.jpg'
				},
				readingTime: 'Lectura em 5 min',
				categories: [{ name: 'Blog', uri: '/uy/blog/' }] as PostBaseCategory[]
			},

			{
				url: '/uy/blog/cervezas-alemanas-en-uruguay/',
				media: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/10/kapsele-helles.jpeg',
				title: 'Cervezas alemanas en Uruguay',
				date: '	2024-10-30T21:19:08',
				author: {
					name: 'BRAAAY',
					image:
						'https://api.braaay.com/wp-content/uploads/2024/10/cropped-braaay-map-logo-96x96.jpg'
				},
				readingTime: 'Lectura em 6 min',
				categories: [{ name: 'Blog', uri: '/uy/blog/' }] as PostBaseCategory[]
			},

			{
				url: '/uy/blog/5-cervecerias-a-visitar-en-montevideo/',
				media:
					'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/10/mbc-montevideo-beer-company.png',
				title: '5 cervecerías a visitar en Montevideo',
				date: '2025-03-24T11:30:58',
				author: {
					name: 'BRAAAY',
					image:
						'https://api.braaay.com/wp-content/uploads/2024/10/cropped-braaay-map-logo-96x96.jpg'
				},
				readingTime: 'Lectura em 2 min',
				categories: [{ name: 'Blog', uri: '/uy/blog/' }] as PostBaseCategory[]
			}
		];
	}
};
