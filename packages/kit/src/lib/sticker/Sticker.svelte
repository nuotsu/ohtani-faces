<Img
	image={sticker.image.face}
	alt={sticker.emojis}
	builder={b => b.size(width, height)}
	className="sticker {className}"
/>

<script>
	import Img from '$lib/Img.svelte'

	export let sticker, width, height, className
</script>
