<svelte:head>
	<title>{site.title.full}</title>
	<meta name="description" content={site.description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.title.full} />
	<meta property="og:description" content={site.description} />
	<meta property="og:image" content={urlFor(site.seoImage).url()} />
</svelte:head>

<slot></slot>

<script>
	import { page } from '$app/stores'
	import { urlFor } from '~/utils/sanity'
	import '../styles/app.css'

	let { site } = $page.stuff
</script>

<script context="module">
	import loadSanity from '~/utils/load-sanity'
	import loadMlb from '~/utils/load-mlb'
	import loadNews from '~/utils/load-news'

	export async function load() {
		return {
			stuff: {
				...await loadSanity(),
				...await loadMlb(),
				...await loadNews(),
			}
		}
	}
</script>
