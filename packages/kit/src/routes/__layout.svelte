<div class="root grid">
	<div class="flex flex-col max-h-screen overflow-hidden" style:grid-area="one">
		<Header/>
		<SelectedSticker/>
		<Recent/>
	</div>

	<div class="flex flex-col bg-white text-black overflow-auto md:rounded-l-lg <md:rounded-t-lg" style:grid-area="two">
		<slot></slot>
	</div>
</div>

<style>
	@screen md {
		.root {
			grid-template-areas: 'one two';
			grid-template-columns: 350px 1fr;
			height: 100vh;
		}
	}

	@screen <md {
		.root {
			grid-template-areas: 'one' 'two';
			grid-template-rows: auto 1fr;
		}
	}
</style>

<script>
	import Header from '$lib/Header.svelte'
	import Recent from '@/lib/sticker/Recent.svelte'
	import SelectedSticker from '$lib/sticker/SelectedSticker.svelte'
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
