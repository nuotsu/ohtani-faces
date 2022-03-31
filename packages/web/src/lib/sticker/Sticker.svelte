<article class={random()} on:click={onClick}>
	<StickerFace {sticker} {emojis} />
	<StickerEmojis {emojis} />
	<Favorited id={sticker._id} />
</article>

<style>
	article {
		@apply cursor-pointer relative grid place-content-center h-full p-2 transition-all;
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

	article:hover {
		box-shadow:
			0 0 0 3px #fff,
			0 2px 20px hsla(0, 0%, 0%, 0.15);

		@apply z-[1] scale-110 rounded;
	}

	article:hover :global(emojis) {
		z-index: 2;
		--gap: 0;
	}
</style>

<script>
	import Favorited from './Favorited.svelte'
	import StickerFace from './StickerFace.svelte'
	import StickerEmojis from './StickerEmojis.svelte'
	import random from '~/utils/random-color'
	import { selectedSticker } from '~/utils/store'

	export let sticker

	let emojis = sticker.emojis

	function onClick() {
		$selectedSticker = sticker
	}
</script>
