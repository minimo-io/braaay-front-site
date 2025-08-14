// import { m } from '$lib/paraglide/messages';
import type { Locale } from '$lib/paraglide/runtime';
import type { PostBaseCategory } from '$lib/types';

export const HomeLatestPosts = (locale: Locale = 'pt') => {
	if (locale == 'pt') {
		return [
			{
				url: '/blog/inovacao-no-terroir-uruguaio-francisco-carrau-cerro-chapeu-e-a-uva-manseng-noir/',
				media:
					'https://api.braaay.com/wp-content/uploads/2025/04/manseng-noir-folklore-cerro-chapeu.jpg',
				title: 'Inovação no Terroir uruguaio: Francisco Carrau, Cerro Chapeu e a uva Manseng Noir',
				date: '2025-08-14T10:08:56',
				author: {
					name: 'BRAAAY',
					image:
						'https://api.braaay.com/wp-content/uploads/2024/10/cropped-braaay-map-logo-96x96.jpg'
				},
				readingTime: 'Lectura em 10 min',
				categories: [{ name: 'Blog', uri: '/blog/' }] as PostBaseCategory[]
			},
			{
				url: '/blog/tannat-day-150-anos-dos-melhores-tannat-do-mundo-14-de-abril/',
				media: 'https://api.braaay.com/wp-content/uploads/2025/04/tannat-day-uruguai.jpeg',
				title: 'Tannat day, 150 anos dos melhores tannat do mundo',
				date: '2025-04-14T11:54:02',
				author: {
					name: 'BRAAAY',
					image:
						'https://api.braaay.com/wp-content/uploads/2024/10/cropped-braaay-map-logo-96x96.jpg'
				},
				readingTime: 'Lectura em 5 min',
				categories: [{ name: 'Blog', uri: '/blog/' }] as PostBaseCategory[]
			},
			{
				url: '/blog/como-combinar-vinho-com-comida-harmonizacoes/',
				media: 'https://api.braaay.com/wp-content/uploads/2025/03/combinar-vinhos-com-comida.jpg',
				title: 'Cómo combinar vinho com comida',
				date: '2025-08-14T10:09:12',
				author: {
					name: 'BRAAAY',
					image:
						'https://api.braaay.com/wp-content/uploads/2024/10/cropped-braaay-map-logo-96x96.jpg'
				},
				readingTime: 'Lectura em 10 min',
				categories: [{ name: 'Blog', uri: '/blog/' }] as PostBaseCategory[]
			}
		];
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
