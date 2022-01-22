<a class="action" href={source} target="_blank">Source</a>

<script>
	import { selectedSticker } from '$lib/utils/store'

	$: source =
		$selectedSticker && ($selectedSticker.image.source || $selectedSticker.image.originalUrl)
</script>
