<button on:click={() => onClick(emoji)}>
	{emoji}
</button>

<script lang="ts">
	import { selectedEmoji } from '$lib/utils/store'

	export let emoji: Emoji

	function onClick(emoji: Emoji): void {
		if ($selectedEmoji === emoji) {
			$selectedEmoji = false
		} else {
			$selectedEmoji = emoji
		}
	}
</script>
