module.exports = {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			screens: {
				'<sm': { max: '640px' },
				'<md': { max: '768px' },
				'<lg': { max: '1024px' },
				'<xl': { max: '1280px' },
				'<2xl': { max: '1536px' }
			},
			fontFamily: {
				sans: `'Poppins', sans-serif`,
			},
		}
	},
	plugins: []
}
