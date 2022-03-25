<button class="action text-base" class:expand on:click>
	{#if expand}
		Collapse
	{:else}
		Expand
	{/if}
</button>

<style>
	button {
		position: sticky;
		right: 0;
	}

	.expand {
		width: 100%;
	}
</style>

<script>
	export let expand
</script>
