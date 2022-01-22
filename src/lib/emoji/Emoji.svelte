<button class:opacity-30={unselected} on:click={() => onClick(emoji)}>
	{emoji}
</button>

<script lang="ts">
	import { selectedEmoji, selectedSticker } from '$lib/utils/store'

	export let emoji: Emoji
	export let closeDetailsOnClick: boolean = false

	$: selected = $selectedEmoji === emoji
	$: unselected = !!$selectedEmoji && !selected

	function onClick(emoji: Emoji): void {
		if (selected) {
			$selectedEmoji = false
		} else {
			$selectedEmoji = emoji

			if (closeDetailsOnClick) $selectedSticker = false
		}
	}
</script>
