<svelte:window on:keyup={onKeyup} />

{#if !!$selectedSticker}
	{#key $selectedSticker._id}
		<aside class="screen" transition:slide>
			<h2 class="flex gap-1 justify-center -mt-2 text-5xl text-center anim-fadein">
				{#each emojis as emoji}
					<Emoji {emoji} />
				{/each}
			</h2>

			<div class="grid grid-cols-2 gap-1 items-end">
				<ShareDownloadButton />
				<SourceButton />
			</div>

			<div class="text-center">
				<AddToFavorite/>
			</div>

			<CloseButton />
		</aside>
	{/key}
{/if}

<style>
	aside {
		display: grid;
		gap: 0.5rem;
		width: 450px;
		max-width: 100%;
		padding: 0.5rem;
		padding-bottom: calc(1rem + env(safe-area-inset-bottom));
		border-bottom: none;
		box-shadow: 0 -1rem 2rem hsla(0, 0%, 0%, 0.05);

		@apply
			fixed left-1/2 bottom-0 z-10 transform -translate-x-1/2
			rounded-t-lg;
	}
</style>

<script>
	import { slide } from 'svelte/transition'
	import Emoji from '~/lib/emoji/Emoji.svelte'
	import ShareDownloadButton from './ShareDownloadButton.svelte'
	import SourceButton from './SourceButton.svelte'
	import CloseButton from './CloseButton.svelte'
	import AddToFavorite from './AddToFavorite.svelte'
	import runes from 'runes'
	import { selectedSticker } from '~/utils/store'

	$: emojis = !!$selectedSticker && runes($selectedSticker.emojis)

	function onKeyup(e) {
		if (!!$selectedSticker && e.key === 'Escape') {
			$selectedSticker = false
		}
	}
</script>
