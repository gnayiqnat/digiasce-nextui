import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			animation: {
				spotlight: 'spotlight 2s ease .75s 1 forwards',
			},
			keyframes: {
				spotlight: {
					'0%': {
						opacity: 0,
						transform: 'translate(-72%, -62%) scale(0.5)',
					},
					'100%': {
						opacity: 1,
						transform: 'translate(-50%,-40%) scale(1)',
					},
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			addCommonColors: true,
			defaultTheme: 'dark',
			themes: {
				dark: {
					colors: {
						primary: {
							DEFAULT: '#ffffff',
						},
					},
				},
			},
		}),
	],
};
