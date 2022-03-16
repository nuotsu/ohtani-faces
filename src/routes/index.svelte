<div>
	<Header />
	<EmojiList />
	<SelectedEmoji />
	<StickerList />
	<Footer />
</div>

<Details />

<style>
	div {
		display: grid;
		gap: 0.8rem;
		padding-block: 1rem;
	}
</style>

<script context="module" lang="ts">
	import client from '$lib/utils/sanity'
	import runes from 'runes'

	export async function load() {
		const stickers: Sticker[] = await client.fetch(`
			*[_type == 'sticker']|order(date desc) {
				_id,
				image {
					face,
					original,
					'originalUrl': original.asset->url,
					source
				},
				emojis,
				date
			}
		`)

		const emojis: Emoji[] = await client.fetch(`
			*[_type == 'sticker']|order(date desc).emojis
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
	import SelectedEmoji from '$lib/emoji/SelectedEmoji.svelte'
	import StickerList from '$lib/sticker/StickerList.svelte'
	import Details from '$lib/details/Details.svelte'
	import Footer from '$lib/Footer.svelte'
	import '../app.css'
</script>
