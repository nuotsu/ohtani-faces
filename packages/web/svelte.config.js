import adapter from '@sveltejs/adapter-netlify'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					'~': path.resolve('./src'),
				}
			}
		},
	},

	preprocess: preprocess({
		postcss: {}
	})
}

export default config
