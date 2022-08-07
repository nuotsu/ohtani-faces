<div class="grid">
	<div class="p-4" style:grid-area="one">
		<Header/>
	</div>

	<div class="bg-white text-black overflow-auto" style:grid-area="two">
		<slot></slot>
	</div>
</div>

<style>
	@screen md {
		.grid {
			grid-template-areas: 'one two';
			grid-template-columns: 300px 1fr;
			height: 100vh;
		}
	}

	@screen <md {
		.grid {
			grid-template-areas: 'one' 'two';
			grid-template-rows: auto 1fr;
		}
	}
</style>

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
