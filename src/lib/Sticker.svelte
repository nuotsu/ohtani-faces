<article class={random()}>
	<StickerFace {sticker} {emojis} />
	<StickerEmojis {emojis} />
</article>

<style>
	article {
		cursor: pointer;
		position: relative;
		display: grid;
		place-content: center;
		height: 100%;
		padding: 0.5rem;
	}

	.red { @apply bg-red-100; }
	.orange { @apply bg-orange-100; }
	.amber { @apply bg-amber-100; }
	.yellow { @apply bg-yellow-100; }
	.lime { @apply bg-lime-100; }
	.green { @apply bg-green-100; }
	.emerald { @apply bg-emerald-100; }
	.teal { @apply bg-teal-100; }
	.cyan { @apply bg-cyan-100; }
	.blue { @apply bg-blue-100; }
	.indigo { @apply bg-indigo-100; }
	.violet { @apply bg-violet-100; }
	.purple { @apply bg-purple-100; }
	.fuchsia { @apply bg-fuchsia-100; }
	.pink { @apply bg-pink-100; }
	.rose { @apply bg-rose-100; }

	article:hover :global(emojis) {
		z-index: 2;
		--gap: 0;
	}
</style>

<script lang="ts">
	import StickerFace from './StickerFace.svelte'
	import StickerEmojis from './StickerEmojis.svelte'
	import random from '$lib/utils/random-color'

	export let sticker: Sticker

	let emojis = sticker.emotion.emoji
</script>
