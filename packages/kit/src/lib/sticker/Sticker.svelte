<Img
	class="sticker {className}"
	image={sticker.image.face}
	alt={sticker.emojis}
	builder={b => b.size(width, height)}
	draggable={false}
/>

<script>
	import Img from '$lib/Img.svelte'

	export let sticker, width, height, className
</script>
