<nav>
	{#each emojis as emoji}
		<button>{emoji}</button>
	{/each}
</nav>

<script>
	import { page } from '$app/stores'

	const { emojis } = $page.stuff
</script>
