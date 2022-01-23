{#if !navigator.canShare}
	<Action {image} href={downloadUrl}>
		<DownloadIcon />
		Download
	</Action>
{:else}
	{#await prepareShare(downloadUrl)}
		<Action {image} disabled>Loading...</Action>
	{:then shareData}
		<Action {image} on:click={() => navigator.share(shareData)}>
			<ShareIcon />
			Share
		</Action>
	{/await}
{/if}

<script lang="ts">
	import Action from './Action.svelte'
	import { urlFor } from '$lib/utils/sanity'
	import { selectedSticker } from '$lib/utils/store'
	import DownloadIcon from '$lib/icon/Download.svelte'
	import ShareIcon from '$lib/icon/Share.svelte'

	$: image = !!$selectedSticker && $selectedSticker.image.face

	$: filename = !!$selectedSticker && `shohei-ohtani-${$selectedSticker.emotion.emoji}`

	$: downloadUrl =
		!!$selectedSticker &&
		urlFor($selectedSticker.image.face).height(200).forceDownload(filename).url()

	async function prepareShare(url: string) {
		let response = await fetch(url)
		let blob = await response.blob()
		let ext = blob.type.split('image/')[1]
		let file = new File([blob], `${filename}.${ext}`, { type: blob.type })

		return { files: [file] }
	}
</script>
