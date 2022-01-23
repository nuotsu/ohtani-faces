<svelte:window on:keyup={onKeyup} />

{#if !!$selectedSticker}
	{#key $selectedSticker._id}
		<aside class="screen rounded-t" transition:slide>
			<h2 class="text-3xl anim-fadein">
				{#each emojis as emoji}
					<Emoji {emoji} />
				{/each}
			</h2>

			<ActionList />

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
		width: 450px;
		max-width: 100%;
		padding: 0.5rem;
		padding-bottom: calc(1rem + env(safe-area-inset-bottom));
	}

	h2 {
		margin-top: -0.5em;
		text-align: center;
	}
</style>

<script lang="ts">
	import { slide } from 'svelte/transition'
	import CloseButton from './CloseButton.svelte'
	import Emoji from '$lib/emoji/Emoji.svelte'
	import ActionList from './ActionList.svelte'
	import runes from 'runes'
	import { selectedSticker } from '$lib/utils/store'

	$: emojis = !!$selectedSticker && runes($selectedSticker.emotion.emoji)

	function onKeyup(e: KeyboardEvent) {
		if (!!$selectedSticker && e.key === 'Escape') {
			$selectedSticker = false
		}
	}
</script>
