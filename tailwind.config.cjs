const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			xs: '375px',
			...defaultTheme.screens
		},
		extend: {
			fontFamily: {
				sans: ['Lexend', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
