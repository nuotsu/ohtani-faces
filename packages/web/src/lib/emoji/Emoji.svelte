<button
	class:opacity-30={unselected}
	class:order-2={!expand}
	on:click={onClick}
>
	{emoji}
</button>

<style>
	button {
		@apply transition-transform hover:scale-125;
	}
</style>

<script>
	import { favoritesFiltered, selectedEmoji, selectedSticker } from '~/utils/store'

	export let emoji, expand, closeDetailsOnClick = false

	$: selected = $selectedEmoji === emoji
	$: unselected = !!$selectedEmoji && !selected

	function onClick() {
		if (selected) {
			$selectedEmoji = false
		} else {
			$favoritesFiltered = false
			$selectedEmoji = emoji

			if (closeDetailsOnClick) $selectedSticker = false
		}
	}
</script>
