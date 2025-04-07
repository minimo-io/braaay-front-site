import type { Country, ImageGeneral } from '$lib/types';
export const countries: Country[] = [
	{
		url: '/pais/uruguai/',
		isBold: true,
		flag: {
			url: '/images/flags/uruguay.png',
			altText: 'Uruguai'
		} as ImageGeneral
	} as Country,
	{
		url: '/pais/brasil/',
		isBold: true,
		flag: {
			url: '/images/flags/brazil.png',
			altText: 'Brasil'
		} as ImageGeneral
	} as Country,
	{
		url: '/pais/chile/',
		flag: {
			url: '/images/flags/chile.png',
			altText: 'Chile'
		} as ImageGeneral
	} as Country,
	{
		url: '/pais/argentina/',
		flag: {
			url: '/images/flags/argentina.png',
			altText: 'Argentina'
		} as ImageGeneral
	} as Country,
	{
		url: '/pais/portugal/',
		flag: {
			url: '/images/flags/portugal.png',
			altText: 'Portugal'
		} as ImageGeneral
	} as Country,
	{
		url: '/pais/italia/',
		flag: {
			url: '/images/flags/italy.png',
			altText: 'Italia'
		} as ImageGeneral
	} as Country
];
