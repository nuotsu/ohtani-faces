{#if 'share' in navigator}
	{#await prepareShare()}
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

	async function prepareShare() {
		let response = await fetch(download)
		let blob = await response.blob()
		let ext = blob.type.split('image/')[1]
		let file = new File([blob], `${ sticker.emojis }.${ ext }`, { type: blob.type })

		return { files: [file] }
	}
</script>
