<nav
	class="sticky top-0 z-[1] max-w-screen-md mx-auto flex gap-x-[0.5ch] p-[0.5ch] bg-white overflow-auto no-scrollbar"
	class:expanded
>
	{#each emojis as emoji}
		<button>{emoji}</button>
	{/each}

	<button class="expander action py-0 text-sm" on:click={() => expanded = !expanded} >
		{expanded ? 'Collapse' : 'Expand'}
	</button>
</nav>

<style>
	nav.expanded {
		flex-wrap: wrap;
	}

	nav:not(.expanded) .expander {
		position: sticky;
		right: 0;
	}
</style>

<script>
	import { page } from '$app/stores'

	const { emojis } = $page.stuff

	let expanded = false
</script>
