{#if !!$selectedSticker}
	<aside>
		<h2>
			{#each emojis as emoji}
				<Emoji {emoji} />
			{/each}
		</h2>

		<CloseButton />
	</aside>
{/if}

<script lang="ts">
	import CloseButton from './CloseButton.svelte'
	import Emoji from '$lib/emoji/Emoji.svelte'
	import runes from 'runes'
	import { selectedSticker } from '$lib/utils/store'

	$: emojis = !!$selectedSticker && runes($selectedSticker.emotion.emoji)
</script>
