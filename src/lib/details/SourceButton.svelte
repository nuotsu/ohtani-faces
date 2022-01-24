<Action
	image={!!$selectedSticker && $selectedSticker.image.original}
	{alt}
	href={!!$selectedSticker && ($selectedSticker.image.source || $selectedSticker.image.originalUrl)}
	target="_blank"
	className="rotate-2 rounded"
>
	<ExternalIcon />
	Original
</Action>

<script lang="ts">
	import Action from './Action.svelte'
	import ExternalIcon from '$lib/icon/External.svelte'
	import { selectedSticker } from '$lib/utils/store'

	let source: string = (!!$selectedSticker && $selectedSticker.image.source) || ''

	// prettier-ignore
	let alt: string =
		source.includes('gettyimages') ? 'Copyright Getty Images' :
		source.includes('instagram') ? 'Copyright Instagram' :
		''
</script>
