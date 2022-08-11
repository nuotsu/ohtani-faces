<Img
	className="sticker {className}"
	image={sticker.image.face}
	alt={sticker.emojis}
	builder={b => b.size(width, height)}
	draggable={false}
/>

<script>
	import Img from '$lib/Img.svelte'

	export let sticker, width, height, className = ''
</script>

<script context="module">
	import { selected_sticker } from '@/utils/store'

	export function setSticker(sticker = null) {
		selected_sticker.set(sticker)
		window.history.pushState(null, null, `/`)
	}
</script>
