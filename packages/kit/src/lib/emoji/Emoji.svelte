<button
	class:opacity-30={$selected_emoji && $selected_emoji !== emoji}
	on:click={() => selectEmoji(emoji)}
>
	{emoji}
</button>

<script>
	import { selected_emoji, selected_sticker } from '@/utils/store'

	export let emoji, unselectSticker

	function selectEmoji(emoji) {
		if ($selected_emoji !== emoji) {
			$selected_emoji = emoji
		} else {
			$selected_emoji = null
		}

		if (unselectSticker) {
			$selected_sticker = null
		}
	}
</script>
