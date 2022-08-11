{#if 'share' in navigator}
	{#await prepareShare(download)}
		<button class="action" disabled>
			Loading...
		</button>

	{:then data}
		<button class="action" on:click={() => navigator.share(data)}>
			Share
		</button>

	{/await}

{:else}
	<a class="action" href={download}>Download</a>
{/if}

<script>
	import { urlFor } from '@/utils/sanity'

	export let sticker

	const download = urlFor(sticker.image.face)
		.height(300)
		.forceDownload(sticker.emojis)
		.url()

	async function prepareShare(url) {
		let response = await fetch(url)
		let blob = await response.blob()
		let ext = blob.type.split('image/')[1]
		let file = new File([blob], `${filename}.${ext}`, { type: blob.type })

		return { files: [file] }
	}
</script>
