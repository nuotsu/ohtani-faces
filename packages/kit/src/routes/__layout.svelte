<svelte:head>
	<title>{$page.stuff.site.title.full}</title>
</svelte:head>

<div class="root grid">
	<div class="one flex flex-col md:max-h-screen <md:w-screen md:overflow-hidden">
		<Header/>
		<SelectedSticker/>
		<Recent/>
	</div>

	<div class="two flex flex-col bg-white text-ink <md:w-screen md:overflow-auto md:rounded-l-lg <md:rounded-t-lg">
		<slot></slot>
	</div>
</div>

<style>
	.root {
		height: 100vh;
		height: 100svh;
	}

	.one { grid-area: one; }
	.two { grid-area: two; }

	@screen md {
		.root {
			grid-template-areas: 'one two';
			grid-template-columns: 350px 1fr;
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
	import { page } from '$app/stores'
	import '../styles/app.css'
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
