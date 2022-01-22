<button class:expand on:click>
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

<script lang="ts">
	export let expand: boolean
</script>
