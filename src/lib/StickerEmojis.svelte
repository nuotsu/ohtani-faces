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
	}

	span {
		margin-right: var(--gap);
		@apply transition-all;
	}
</style>

<script>
	import runes from 'runes'

	export let emojis
</script>
