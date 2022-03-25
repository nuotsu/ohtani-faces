<button class:opacity-30={unselected} on:click={() => onClick(emoji)}>
	{emoji}
</button>

<style>
	button {
		@apply transition-transform hover:scale-125;
	}
</style>

<script>
	import { selectedEmoji, selectedSticker } from '~/utils/store'

	export let emoji, closeDetailsOnClick = false

	$: selected = $selectedEmoji === emoji
	$: unselected = !!$selectedEmoji && !selected

	function onClick(emoji) {
		if (selected) {
			$selectedEmoji = false
		} else {
			$selectedEmoji = emoji

			if (closeDetailsOnClick) $selectedSticker = false
		}
	}
</script>
