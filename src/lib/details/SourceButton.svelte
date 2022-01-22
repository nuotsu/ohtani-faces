<Action
	image={!!$selectedSticker && $selectedSticker.image.original}
	href={!!$selectedSticker && ($selectedSticker.image.source || $selectedSticker.image.originalUrl)}
	target="_blank"
>
	Source
</Action>

<script>
	import Action from './Action.svelte'
	import { selectedSticker } from '$lib/utils/store'
</script>
