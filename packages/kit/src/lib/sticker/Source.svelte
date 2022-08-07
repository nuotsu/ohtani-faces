<a class="button" href={source || orig} target="_blank">
	Source
</a>

<script>
	import { urlFor } from '@/utils/sanity'

	export let sticker

	const { source, original } = sticker.image

	const orig = urlFor(original).url()
</script>
