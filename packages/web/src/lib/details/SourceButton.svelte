<Action
	image={original}
	{alt}
	href={source || originalUrl}
	target="_blank"
	className="rotate-2 rounded"
>
	<ExternalIcon height="1em" />
	Original
</Action>

<script>
	import Action from './Action.svelte'
	import ExternalIcon from '~/lib/icon/External.svelte'
	import { selectedSticker } from '~/utils/store'

	let { original, source, originalUrl } = $selectedSticker?.image

	let alt =
		source?.includes('gettyimages') ? 'Copyright Getty Images' :
		source?.includes('instagram') ? 'Copyright Instagram' :
		''
</script>
