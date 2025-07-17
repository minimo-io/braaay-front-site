import { m } from '$lib/paraglide/messages';

export const HomeProducts = () => {
	return {
		products: [
			{
				title: 'Familia Deicas Alvarinho Atlántico Sur 750ml',
				price: `${m.currencySymbol()}148,00`,
				regularPrice: `${m.currencySymbol()}148,00`,
				url: '/produto/vinho-branco-alvarinho-atlantico-sur-deicas-uruguai/',
				score: '',
				image: {
					src: 'https://braaay.com/wp-content/uploads/2025/02/vinho-alvarinho-atlantico-sur-deicas-2.png',
					alt: 'vinho-alvarinho-atlantico-sur-deicas-2'
				}
			},
			{
				title: 'Bouza Albariño 2024',
				price: `${m.currencySymbol()}285,00`,
				regularPrice: `${m.currencySymbol()}285,00`,
				url: '/produto/vinho-branco-bouza-albarino-2024-uruguai/',
				score: '',
				image: {
					src: 'https://braaay.com/wp-content/uploads/2025/05/vinho-albarinho-bouza.png',
					alt: 'vinho-albarinho-bouza'
				}
			},
			{
				title: 'Família Deicas Massimo Tannat 750ml',
				price: `${m.currencySymbol()}1.199,00`,
				regularPrice: `${m.currencySymbol()}1.199,00`,
				url: '/produto/vinho-familia-deicas-massimo-tannat/',
				score: '5.0',
				image: {
					src: 'https://braaay.com/wp-content/uploads/2024/09/vinho-massimo-familia-deicas.png',
					alt: 'massimo-tannat-familia-deicas'
				}
			},
			{
				title: 'Monte Agudo Sublime 750ml',
				price: `${m.currencySymbol()}127,90`,
				regularPrice: `${m.currencySymbol()}127,90`,
				url: '/produto/vinhedos-do-monte-agudo-sublime/',
				score: '',
				image: {
					src: 'https://braaay.com/wp-content/uploads/2024/08/Sublime-1.webp',
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
					src: 'https://braaay.com/wp-content/uploads/2024/08/PIZZATO-concentus.webp',
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
					src: 'https://braaay.com/wp-content/uploads/2024/11/kit-vina-eden-flores-naturais-blur.png',
					alt: 'kit-vina-eden-flores-naturais-blur'
				}
			},
			{
				title: 'Kit x6 espumantes Brut Cume + Sacola',
				price: `${m.currencySymbol()}299,40`,
				regularPrice: `${m.currencySymbol()}299,40`,
				url: '/produto/kit-x6-espumantes-brut-cume-sacola/',
				score: '',
				image: {
					src: 'https://braaay.com/wp-content/uploads/2024/11/kit-presente-espumante-cume.jpg',
					alt: 'kit-presente-espumante-cume'
				}
			},
			{
				title: 'Kit x3 Espumantes Especiáis + Taça',
				price: `${m.currencySymbol()}300,00`,
				regularPrice: `${m.currencySymbol()}300,00`,
				url: '/produto/kit-x3-espumantes-taca/',
				score: '',
				image: {
					src: 'https://braaay.com/wp-content/uploads/2024/11/kit-taca-espumantes-prod.jpg',
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
					src: 'https://braaay.com/wp-content/uploads/2024/11/kit-artesana-tannat-1.png',
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
					src: 'https://braaay.com/wp-content/uploads/2024/11/kit-pizzato-brut-choco-dengo.png',
					alt: 'kit-espumante-pizzato-chocolate'
				}
			}
		]
	};
};
