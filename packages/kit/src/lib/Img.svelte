<img {src} {alt} {width} {height} {loading} {...$$props} />

<script>
	import { urlFor } from '@/utils/sanity'
	import { getImageDimensions } from '@sanity/asset-utils'

	export let image, alt, loading = 'lazy'
	export let builder = () => {}

	const src = (builder(urlFor(image)) || urlFor(image))
		.auto('format')
		.url()

	const { width, height } = getImageDimensions(image)
</script>
