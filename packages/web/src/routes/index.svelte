<Header/>
<EmojiList/>
<SelectedEmoji/>
<StickerList/>
<Ad/>
<Footer/>
<Details/>

<script>
	import Header from '~/lib/Header.svelte'
	import EmojiList from '~/lib/emoji/EmojiList.svelte'
	import SelectedEmoji from '~/lib/emoji/SelectedEmoji.svelte'
	import StickerList from '~/lib/sticker/StickerList.svelte'
	import Ad from '~/lib/Ad.svelte'
	import Footer from '~/lib/Footer.svelte'
	import Details from '~/lib/details/Details.svelte'
	import '../app.css'
</script>

<script context="module">
	import client from '~/utils/sanity'
	import runes from 'runes'

	export async function load() {
		const { stickers, emojis } = await client.fetch(`
			{
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
				stickers,
				emojis: [...new Set(runes(emojis.join('')))]
			}
		}
	}
</script>
