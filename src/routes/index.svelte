<Header />
<EmojiList />
<StickerList />
<Details />

<script context="module" lang="ts">
	import client from '$lib/utils/sanity'
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
			*[_type == 'sticker'] | order(meta.date desc).emotion.emoji
		`)

		return {
			stuff: {
				stickers,
				emojis: [...new Set(runes(emojis.join('')))]
			}
		}
	}
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte'
	import EmojiList from '$lib/emoji/EmojiList.svelte'
	import StickerList from '$lib/sticker/StickerList.svelte'
	import Details from '$lib/details/Details.svelte'
	import '../app.css'
</script>
