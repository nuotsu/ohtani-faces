<button
	class="with-icon" class:order-1={!expand} class:active={$favoritesFiltered}
	title="Favorites"
	on:click={onClick}
>
	<HeartSolid height="1em" />

	{#if $favoritesFiltered}
		<span class="text-sm">Favorites</span>
	{/if}
</button>

<style>
	button {
		padding: 0.25em;
		gap: 0.25ch;

		@apply text-red-300 rounded transition-colors;
	}

	button :global(svg) {
		@apply transition-transform;
	}

	button:not(.active):hover :global(svg) {
		transform: scale(1.2);
	}

	.active {
		@apply bg-red-300 text-white;
	}
</style>

<script>
	import { favoritesFiltered, selectedEmoji } from '~/utils/store'
	import HeartSolid from '~/lib/icon/HeartSolid.svelte'

	export let expand

	function onClick() {
		if ($favoritesFiltered) {
			$favoritesFiltered = false
		} else {
			$selectedEmoji = false
			$favoritesFiltered = true
		}
	}
</script>
