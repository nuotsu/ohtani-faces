{#if !!$selectedSticker}
	<aside class="screen rounded-t">
		<h2 class="text-3xl">
			{#each emojis as emoji}
				<Emoji {emoji} />
			{/each}
		</h2>

		<ActionList />

		<CloseButton />
	</aside>
{/if}

<style>
	aside {
		position: fixed;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
	}

	h2 {
		text-align: center;
	}
</style>

<script lang="ts">
	import CloseButton from './CloseButton.svelte'
	import Emoji from '$lib/emoji/Emoji.svelte'
	import ActionList from './ActionList.svelte'
	import runes from 'runes'
	import { selectedSticker } from '$lib/utils/store'

	$: emojis = !!$selectedSticker && runes($selectedSticker.emotion.emoji)
</script>
