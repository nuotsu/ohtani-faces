<Header/>

<main>
	<slot></slot>
</main>

<script>
	import Header from '$lib/Header.svelte'
	import '../app.css'
</script>

<script context="module">
	import client from '@/utils/sanity'
	import groq from 'groq'
	import runes from 'runes'

	export async function load() {
		const data = await client.fetch(groq`{
			'site': *[_type == 'site'][0],
			'stickers': *[_type == 'sticker']|order(date desc),
		}`)

		const emojis = [...new Set(
			runes(data.stickers
				.flatMap(sticker => sticker.emojis)
				.join('')
			)
		)]

		return {
			stuff: {
				...data,
				emojis,
			},
		}
	}
</script>
