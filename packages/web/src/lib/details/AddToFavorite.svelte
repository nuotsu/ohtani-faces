{#if favorited}
	<button class="with-icon" title="Remove from favorites" on:click={remove}>
		<HeartSolid height="1em" />
		<span class="text-sm">Favorite</span>
	</button>
{:else}
	<button class="with-icon" title="Add to favorites" on:click={add}>
		<Heart height="1em" />
		<span class="text-sm">Favorite</span>
	</button>
{/if}

<style>
	button {
		display: inline-flex;
		padding: 0.25em;

		@apply text-red-300 hover:text-red-500 transition-colors;
	}
</style>

<script>
	import Heart from '~/lib/icon/Heart.svelte'
	import HeartSolid from '~/lib/icon/HeartSolid.svelte'
	import { favorites, selectedSticker } from '~/utils/store'
	import { browser } from '$app/env'

	$: favorited = !!$selectedSticker && $favorites.includes($selectedSticker._id)

	function remove() {
		if (browser) {
			$favorites = $favorites.filter(id => id !== $selectedSticker._id)
			localStorage.setItem('favorites', JSON.stringify($favorites))
		}
	}

	function add() {
		if (browser) {
			$favorites = [...$favorites, $selectedSticker._id]
			localStorage.setItem('favorites', JSON.stringify($favorites))
		}
	}
</script>
