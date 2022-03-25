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

	let { site } = $page.stuff
</script>

<script context="module">
	import client from '~/utils/sanity'
	import runes from 'runes'

	export async function load() {
		const { site, stickers, emojis } = await client.fetch(`
			{
				'site': *[_type == 'site'][0],
				'stickers': *[_type == 'sticker']|order(date desc) {
					_id,
					image {
						face,
						original,
						'originalUrl': original.asset->url,
						source
					},
					emojis,
					date
				},
				'emojis': *[_type == 'sticker']|order(date desc).emojis
			}
		`)

		return {
			stuff: {
				site,
				stickers,
				emojis: [...new Set(runes(emojis.join('')))]
			}
		}
	}
</script>
