<article>
	<div>
		{#each emojis as emoji}
			{emoji}
		{/each}
	</div>
</article>

<script lang="ts">
	import runes from 'runes'

	export let sticker: Sticker

	let emojis = runes(sticker.emotion.emoji)
</script>
