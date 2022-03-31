<button
	class="action text-base sticky right-0"
	class:w-full={expand}
	class:order-2={!expand}
	on:click
>
	{#if expand}
		Collapse
	{:else}
		Expand
	{/if}
</button>

<script>
	export let expand
</script>
