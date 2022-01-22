{#if !navigator.canShare}
	<a class="action" href={downloadUrl}>Download</a>
{:else}
	{#await prepareShare()}
		<button class="action" disabled>Loading...</button>
	{:then shareData}
		<button class="action" on:click={() => navigator.share(shareData)}>Share</button>
	{/await}
{/if}

<script>
	import { urlFor } from '$lib/utils/sanity'
	import { selectedSticker } from '$lib/utils/store'

	$: filename = !!$selectedSticker && `shohei-ohtani-${$selectedSticker.emotion.emoji}`

	$: downloadUrl =
		!!$selectedSticker &&
		urlFor($selectedSticker.image.face).height(200).forceDownload(filename).url()

	async function prepareShare() {
		let response = await fetch(downloadUrl)
		let blob = await response.blob()
		let ext = blob.type.split('image/')[1]
		let file = new File([blob], `${filename}.${ext}`, { type: blob.type })

		return { files: [file] }
	}
</script>
