<img {style} class={className} {src} {alt} {width} {height} {loading} {draggable} />

<script>
	import { urlFor } from '@/utils/sanity'
	import { getImageDimensions } from '@sanity/asset-utils'

	export let image, style, className, alt, loading = 'lazy', draggable
	export let builder = () => {}

	const src = (builder(urlFor(image)) || urlFor(image))
		.auto('format')
		.url()

	const { width, height } = getImageDimensions(image)
</script>
