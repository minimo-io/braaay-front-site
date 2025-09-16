import { m } from '$lib/paraglide/messages';
import type { Locale } from '$lib/paraglide/runtime';

export const HomeProducts = (locale: Locale = 'pt') => {
	if (locale == 'pt') {
		return {
			products: [
				// {
				// 	title: 'Familia Deicas Alvarinho Atlántico Sur 750ml',
				// 	price: `${m.currencySymbol()}148,00`,
				// 	regularPrice: `${m.currencySymbol()}148,00`,
				// 	url: '/produto/vinho-branco-alvarinho-atlantico-sur-deicas-uruguai/',
				// 	score: '',
				// 	image: {
				// 		src: 'https://api.braaay.com/wp/wp-content/uploads/2025/02/vinho-alvarinho-atlantico-sur-deicas-2.png',
				// 		alt: 'vinho-alvarinho-atlantico-sur-deicas-2'
				// 	}
				// },
				{
					title: 'Miolo Single Vineyard Gewurztraminer 750ml',
					price: `${m.currencySymbol()}86,00`,
					regularPrice: `${m.currencySymbol()}86,00`,
					url: '/produto/vinho-branco-miolo-single-vineyard-gewurztraminer-750ml/',
					score: '',
					image: {
						src: 'https://api.braaay.com/wp-content/uploads/2025/09/miolo-single-vineyard-gewurztraminer.png',
						alt: 'miolo-single-vineyard-gewurztraminer'
					}
				},
				{
					title: 'Bouza Albariño 2024',
					price: `${m.currencySymbol()}285,00`,
					regularPrice: `${m.currencySymbol()}285,00`,
					url: '/produto/vinho-branco-bouza-albarino-2024-uruguai/',
					score: '',
					image: {
						src: 'https://api.braaay.com/wp/wp-content/uploads/2025/05/vinho-albarinho-bouza.png',
						alt: 'vinho-albarinho-bouza'
					}
				},
				{
					title: '⭐️ Balasto 2020',
					price: `${m.currencySymbol()}1.275,00`,
					regularPrice: `${m.currencySymbol()}1.500,00`,
					url: '/produto/vinho-uruguaio-icone-balasto/',
					score: '5.0',
					image: {
						src: 'https://api.braaay.com/wp-content/uploads/2025/08/garzon-balastro-2.png',
						alt: 'balasto-2020-blend'
					}
				},
				{
					title: 'Monte Agudo Sublime 750ml',
					price: `${m.currencySymbol()}127,90`,
					regularPrice: `${m.currencySymbol()}127,90`,
					url: '/produto/vinhedos-do-monte-agudo-sublime/',
					score: '',
					image: {
						src: 'https://api.braaay.com/wp/wp-content/uploads/2024/08/Sublime-1.webp',
						alt: 'Sublime (1)'
					}
				},
				{
					title: 'Pizzato Concentus Gran Reserva 750ml',
					price: `${m.currencySymbol()}190,00`,
					regularPrice: `${m.currencySymbol()}190,00`,
					url: '/produto/vinho-pizzato-concentus-gran-reserva/',
					score: '',
					image: {
						src: 'https://api.braaay.com/wp/wp-content/uploads/2024/08/PIZZATO-concentus.webp',
						alt: 'PIZZATO concentus'
					}
				}
			],
			kits: [
				{
					title: 'Kit vinho Pinot Noir Premium + Flores naturais',
					price: `${m.currencySymbol()}390,00`,
					regularPrice: `${m.currencySymbol()}390,00`,
					url: '/produto/kit-vinho-pinot-noir-premium-flores-naturais/',
					score: '4.8',
					image: {
						src: 'https://api.braaay.com/wp/wp-content/uploads/2024/11/kit-vina-eden-flores-naturais-blur.jpeg',
						alt: 'kit-vina-eden-flores-naturais-blur'
					}
				},
				// {
				// 	title: 'Kit x6 espumantes Brut Cume + Sacola',
				// 	price: `${m.currencySymbol()}299,40`,
				// 	regularPrice: `${m.currencySymbol()}299,40`,
				// 	url: '/produto/kit-x6-espumantes-brut-cume-sacola/',
				// 	score: '',
				// 	image: {
				// 		src: 'https://api.braaay.com/wp/wp-content/uploads/2024/11/kit-presente-espumante-cume.jpg',
				// 		alt: 'kit-presente-espumante-cume'
				// 	}
				// },

				{
					title: 'Kit Três Paixões: Vinho+Azeite+Café',
					price: `${m.currencySymbol()}360,00`,
					regularPrice: `${m.currencySymbol()}360,00`,
					url: '/produto/kit-paixoes/',
					score: '',
					image: {
						src: 'https://api.braaay.com/wp-content/uploads/2025/08/kit-minha-paixoes-braaay.jpeg',
						alt: 'kit-paixoes-tannat-cafe'
					}
				},

				{
					title: 'Kit x3 Espumantes Especiáis + Taça',
					price: `${m.currencySymbol()}300,00`,
					regularPrice: `${m.currencySymbol()}300,00`,
					url: '/produto/kit-x3-espumantes-taca/',
					score: '',
					image: {
						src: 'https://api.braaay.com/wp/wp-content/uploads/2024/11/kit-taca-espumantes-prod.jpg',
						alt: 'kit-taca-espumantes-prod'
					}
				},
				{
					title:
						'Kit vinho com quejo: Tannat da Artesana com queijos Brie e Gouda + Pistache para presente',
					price: `${m.currencySymbol()}249,00`,
					regularPrice: `${m.currencySymbol()}249,00`,
					url: '/produto/kit-vinho-artesana-tannat-queijos-brie-e-gouda-pistache-e-caixa/',
					score: '',
					image: {
						src: 'https://api.braaay.com/wp/wp-content/uploads/2024/11/kit-artesana-tannat-1.png',
						alt: 'kit-vinho-e-queijo'
					}
				},
				{
					title: 'Kit Espumante Pizzato Brut Rosé com Chocolates Dengo',
					price: `${m.currencySymbol()}242,00`,
					regularPrice: `${m.currencySymbol()}242,00`,
					url: '/produto/kit-espumante-pizzato-brut-rose-com-chocolates-dengo/',
					score: '',
					image: {
						src: 'https://api.braaay.com/wp/wp-content/uploads/2024/11/kit-pizzato-brut-choco-dengo.jpeg',
						alt: 'kit-espumante-pizzato-chocolate'
					}
				}
			]
		};
	} else if (locale == 'uy') {
		return {
			products: [
				{
					title: 'El Bananero Japi Beer (Lager)',
					price: `${m.currencySymbol()}190,00`,
					regularPrice: `${m.currencySymbol()}190,00`,
					url: '/uy/producto/cerveza-el-bananero-japi-beer-lager/',
					score: '',
					image: {
						src: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/12/japi-beer-uruguay-lager-el-bananero.png',
						alt: 'Japi-beer-lager-el-bananero'
					}
				},
				{
					title: 'Rebelión IPA (Sin alcohol)',
					price: `${m.currencySymbol()}200,00`,
					regularPrice: `${m.currencySymbol()}200,00`,
					url: '/uy/producto/cerveza-sin-alcohol-rebelion-ipa/',
					score: '',
					image: {
						src: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/11/cerveza-rebelion-ipa.png',
						alt: 'cerveza-rebelion-ip-sin-alcohol'
					}
				},
				{
					title: 'Cabesas Bier IPA Atómica',
					price: `${m.currencySymbol()}186,00`,
					regularPrice: `${m.currencySymbol()}186,00`,
					url: '/uy/producto/cerveza-cabesas-bier-ipa-atomica/',
					score: '',
					image: {
						src: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/12/cabesas-bier-ipa-atomica.png',
						alt: 'cabesas-bier-ipa-atomica'
					}
				},
				{
					title: 'The Endless Sour',
					price: `${m.currencySymbol()}200,00`,
					regularPrice: `${m.currencySymbol()}200,00`,
					url: '/uy/producto/cerveza-the-endless-sour-xcs/',
					score: '',
					image: {
						src: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/11/the-endless-sour-cerveza-por-culpa-de-sam.png',
						alt: 'por-culpa-de-sam-endless-sour'
					}
				},
				{
					title: 'American Pils XCS',
					price: `${m.currencySymbol()}150,00`,
					regularPrice: `${m.currencySymbol()}150,00`,
					url: '/uy/producto/cerveza-american-pils-xcs/',
					score: '',
					image: {
						src: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/12/cerveza-por-culpa-de-sam-pils.png',
						alt: 'american-pils'
					}
				}
			],
			kits: [
				{
					title: 'Familia Deicas Alvarinho Atlántico Sur 750ml',
					price: `${m.currencySymbol()}150,00`,
					regularPrice: `${m.currencySymbol()}150,00`,
					url: '/uy/producto/vino-familia-deicas-alvarinho-atlantico-sur-750ml/',
					score: '',
					image: {
						src: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2025/04/vinho-alvarinho-atlantico-sur-deicas-2.webp',
						alt: 'familia-deicas-alvarinho'
					}
				},
				{
					title: 'Davok IPA',
					price: `${m.currencySymbol()}150,00`,
					regularPrice: `${m.currencySymbol()}150,00`,
					url: '/uy/producto/cerveza-davok-ipa/',
					score: '',
					image: {
						src: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/04/cerveza-davok-ipa-braaay.webp',
						alt: 'davok-ipa'
					}
				},
				{
					title: 'Equilibrio NEIPA',
					price: `${m.currencySymbol()}200,00`,
					regularPrice: `${m.currencySymbol()}200,00`,
					url: '/uy/producto/cerveza-artesanal-equilibrio-neipa/',
					score: '',
					image: {
						src: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/03/equilibrio-neipa-la-fuerza.webp',
						alt: 'equilibrio-neipa'
					}
				},
				{
					title: 'Capitan Fumasa Hemp IPA',
					price: `${m.currencySymbol()}200,00`,
					regularPrice: `${m.currencySymbol()}200,00`,
					url: '/uy/producto/cerveza-capitan-fumasa-hemp-ipa-cannabica/',
					score: '',
					image: {
						src: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/03/cerveza-indica-hemp-ipa-fumasa.webp',
						alt: 'capitan-fumasa-hemp-ipa'
					}
				},
				{
					title: 'Mastra Stout',
					price: `${m.currencySymbol()}200,00`,
					regularPrice: `${m.currencySymbol()}200,00`,
					url: '/uy/producto/cerveza-artesanal-mastra-american-stout/',
					score: '',
					image: {
						src: 'https://api.braaay.com/uy/wp-content/uploads/sites/2/2024/02/cerveza-mastra-american-stout.webp',
						alt: 'mastra-stout'
					}
				}
			]
		};
	}
};
