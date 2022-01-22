<emojis>
	{#each runes(emojis) as emoji}
		<span>{emoji}</span>
	{/each}
</emojis>

<style>
	emojis {
		position: absolute;
		left: 0;
		bottom: 0;
		display: flex;
		margin: 0.25rem;
	}

	span {
		margin-right: var(--gap, -0.4em);
		@apply transition-all;
	}
</style>

<script lang="ts">
	import runes from 'runes'

	export let emojis: Emoji
</script>
