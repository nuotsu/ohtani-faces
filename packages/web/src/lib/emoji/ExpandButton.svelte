<button
	class="action text-base"
	class:expand
	on:click
>
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

	.expand { width: 100%; }

	button:not(.expand) { order: 2; }
</style>

<script>
	export let expand
</script>
