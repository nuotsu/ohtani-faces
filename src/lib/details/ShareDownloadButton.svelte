{#if !navigator.canShare}
	<a class="action" href={downloadUrl}>Download</a>
{:else}
	{#await prepareShare(downloadUrl)}
		<button class="action" disabled>Loading...</button>
	{:then shareData}
		<button class="action" on:click={() => navigator.share(shareData)}>Share</button>
	{/await}
{/if}

<script lang="ts">
	import { urlFor } from '$lib/utils/sanity'
	import { selectedSticker } from '$lib/utils/store'

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
