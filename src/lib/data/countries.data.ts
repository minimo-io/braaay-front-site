// For homepage flags
import type { AllCountries, Country, ImageGeneral } from '$lib/types';

export const allCountries: AllCountries = {
	pt: [
		{
			name: 'Uruguai',
			url: '/pais/uruguai/',
			isBold: true,
			count: 44,
			flag: {
				url: '/images/flags/uruguay.png',
				altText: 'Uruguai'
			} as ImageGeneral
		} as Country,
		{
			name: 'Brasil',
			url: '/pais/brasil/',
			isBold: true,
			flag: {
				url: '/images/flags/brazil.png',
				altText: 'Brasil'
			} as ImageGeneral
		} as Country,
		{
			name: 'Chile',
			url: '/pais/chile/',
			flag: {
				url: '/images/flags/chile.png',
				altText: 'Chile'
			} as ImageGeneral
		} as Country,
		{
			name: 'Argentina',
			url: '/pais/argentina/',
			flag: {
				url: '/images/flags/argentina.png',
				altText: 'Argentina'
			} as ImageGeneral
		} as Country,
		{
			name: 'Portugal',
			url: '/pais/portugal/',
			flag: {
				url: '/images/flags/portugal.png',
				altText: 'Portugal'
			} as ImageGeneral
		} as Country,
		{
			name: 'Italia',
			url: '/pais/italia/',
			flag: {
				url: '/images/flags/italy.png',
				altText: 'Italia'
			} as ImageGeneral
		} as Country
	],
	uy: []
};
