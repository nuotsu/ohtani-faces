<div class="absolute left-0 bottom-0 flex m-1">
	{#each runes(emojis) as emoji}
		<span>{emoji}</span>
	{/each}
</div>

<style>
	span {
		margin-right: var(--gap, -0.4em);
		@apply transition-all;
	}
</style>

<script>
	import runes from 'runes'

	export let emojis
</script>
