<figure>
	<img {src} alt={emojis} height="200" draggable="false" />
</figure>

<style>
	figure {
		position: relative;
		z-index: 1;
		display: grid;
		place-content: center;
	}

	img {
		height: 100px;
		object-fit: contain;
	}
</style>

<script>
	import { urlFor } from '~/utils/sanity'

	export let sticker, emojis

	let src = urlFor(sticker.image.face).height(200).auto('format').url()
</script>
