<article>
	<StickerFace {sticker} {emojis} />
	<StickerEmojis {emojis} />
</article>

<style>
	article {
		position: relative;
		display: grid;
		place-content: center;
		height: 100%;
	}

	article:not(:hover) :global(emojis) {
		z-index: -1;
		--gap: -0.5ch;
	}
</style>

<script lang="ts">
	import StickerFace from './StickerFace.svelte'
	import StickerEmojis from './StickerEmojis.svelte'

	export let sticker: Sticker

	let emojis = sticker.emotion.emoji
</script>
