{#if favorited}
	<button class="action-2 with-icon" title="Remove from favorites" on:click={remove}>
		<HeartSolid height="1em" />
		<span class="text-sm">Favorited</span>
	</button>
{:else}
	<button class="action-2 with-icon" title="Add to favorites" on:click={add}>
		<Heart height="1em" />
		<span class="text-sm">Favorite</span>
	</button>
{/if}

<style>
	button {
		@apply text-red-300 hover:text-red-500 transition-colors;
	}
</style>

<script>
	import Heart from '~/lib/icon/Heart.svelte'
	import HeartSolid from '~/lib/icon/HeartSolid.svelte'
	import { favorites, selectedSticker } from '~/utils/store'
	import { browser } from '$app/env'

	$: favorited = $favorites.includes($selectedSticker?._id)

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
