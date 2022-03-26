<svelte:window on:keyup={onKeyup} />

{#if !!$selectedSticker}
	{#key $selectedSticker._id}
		<aside class="screen" transition:slide>
			<h2 class="flex gap-1 justify-center text-5xl anim-fadein">
				{#each emojis as emoji}
					<Emoji {emoji} />
				{/each}
			</h2>

			<ActionList/>

			<div class="text-center">
				<AddToFavorite/>
			</div>

			<CloseButton height="1em" />
		</aside>
	{/key}
{/if}

<style>
	aside {
		position: fixed;
		left: 50%;
		bottom: 0;
		z-index: 10;
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

<script>
	import { slide } from 'svelte/transition'
	import Emoji from '~/lib/emoji/Emoji.svelte'
	import ActionList from './ActionList.svelte'
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
