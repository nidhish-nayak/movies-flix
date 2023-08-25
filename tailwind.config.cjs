/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',

	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {}
		}
	},

	plugins: []
};

module.exports = config;
