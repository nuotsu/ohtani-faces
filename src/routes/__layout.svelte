<Header />

<slot />

<script context="module" lang="ts">
	import client from '$lib/sanity'
	import runes from 'runes'

	export async function load() {
		const stickers: Sticker[] = await client.fetch(`
			*[_type == 'sticker'] | order(meta.date desc) {
				_id,
				image {
					face,
					original,
					'originalUrl': original.asset->url,
					source,
					embed
				},
				emotion,
				meta
			}
		`)

		const emojis: Emoji[] = await client.fetch(`
			*[_type == 'sticker'].emotion.emoji
		`)

		return {
			stuff: {
				stickers,
				emojis: [...new Set(runes(emojis.join('')))].sort()
			}
		}
	}
</script>

<script>
	import Header from '$lib/Header.svelte'
	import '../app.css'
</script>
