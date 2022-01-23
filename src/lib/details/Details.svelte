<svelte:window on:keyup={onKeyup} />

{#if !!$selectedSticker}
	{#key $selectedSticker._id}
		<aside class="screen" transition:slide>
			<h2 class="text-4xl anim-fadein">
				{#each emojis as emoji}
					<Emoji {emoji} />
				{/each}
			</h2>

			<ActionList />
			<StickerMeta meta={$selectedSticker.meta} />
			<CloseButton />
		</aside>
	{/key}
{/if}

<style>
	aside {
		position: fixed;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		display: grid;
		gap: 0.5rem;
		width: 450px;
		max-width: 100%;
		padding: 0.5rem;
		padding-bottom: calc(1rem + env(safe-area-inset-bottom));
		border-bottom: none;

		@apply rounded-t shadow-lg;
	}

	h2 {
		margin-top: -0.5em;
		text-align: center;
	}
</style>

<script lang="ts">
	import { slide } from 'svelte/transition'
	import Emoji from '$lib/emoji/Emoji.svelte'
	import ActionList from './ActionList.svelte'
	import StickerMeta from './StickerMeta.svelte'
	import CloseButton from './CloseButton.svelte'
	import runes from 'runes'
	import { selectedSticker } from '$lib/utils/store'

	$: emojis = !!$selectedSticker && runes($selectedSticker.emotion.emoji)

	function onKeyup(e: KeyboardEvent) {
		if (!!$selectedSticker && e.key === 'Escape') {
			$selectedSticker = false
		}
	}
</script>
