<figure>
	<img {src} alt={sticker.meta.description || emojis} height="200" draggable="false" />
</figure>

<style>
	figure {
		display: grid;
		place-content: center;
	}

	img {
		max-height: 120px;
	}
</style>

<script lang="ts">
	import { urlFor } from '$lib/sanity'

	export let sticker: Sticker
	export let emojis: string

	let src = urlFor(sticker.image.face).height(200).auto('format').url()
</script>
