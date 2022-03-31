<button
	class="transition-transform hover:scale-125"
	class:opacity-30={!!$selectedEmoji && !selected}
	class:order-2={!expand}
	on:click={onClick}
>
	{emoji}
</button>

<script>
	import { favoritesFiltered, selectedEmoji, selectedSticker } from '~/utils/store'

	export let emoji, expand, closeDetailsOnClick = false

	$: selected = $selectedEmoji === emoji

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
