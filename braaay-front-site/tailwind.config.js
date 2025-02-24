/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			maxWidth: {
				'screen-lg-2x': '1100px'
			}
		},
		colors: {
			transparent: 'transparent',
			black: '#000',
			white: '#ffffff',
			map: '#293E3F',
			bra: '#226246',
			sky: '#226246',
			sun: '#BD8836',
			blue: '#212639',
			uru: '#4C89C8',
			way: '#B8CADB',

			grey: {
				background: '#fafafa',
				blueish: '#303239',
				lighter: '#e3e3e3',
				light: '#c3c3c3',
				medium: '#a0a0a0',
				'medium-dark': '#737373',
				dark: '#303133',
				darkest: '#1d1d1d'
			},

			green: {
				light: '#F9FDF7',
				medium: '#43aa9b',
				dark: '#36b376'
			},

			yellow: {
				dark: '#F3A633',
				light: '#FEFDE9'
			}
		},

		fontFamily: {
			prata: ['Prata', 'serif'],
			roboto: ['Open Sans Variable', 'sans-serif']
		}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		function ({ addUtilities }) {
			const newUtilities = {
				'.full-width-r': {
					position: 'absolute',
					width: '100vw',
					'margin-right': '-50vw',
					left: '50%',
					right: '50%',
					transform: 'translate(-6%)',
					top: 0
				}
			};

			// Apply the custom utility classes at all breakpoints
			addUtilities(newUtilities, ['responsive']);
		}
	],
	darkMode: 'class'
};
