<nav
	class="max-w-screen-md mx-auto gap-x-2 p-2 glass text-xl no-scrollbar"
	class:expanded
>
	{#each emojis as emoji}
		<Emoji {emoji} unselectSticker />
	{/each}

	<button
		class="expander action py-0 text-sm"
		on:click={() => expanded = !expanded}
	>
		{expanded ? 'Collapse' : 'Expand'}
	</button>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 1;
		display: flex;
		overflow-x: auto;
	}

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
	import Emoji from './Emoji.svelte'

	const { emojis } = $page.stuff

	let expanded = false
</script>
