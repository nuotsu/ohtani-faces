{#if favorited}
	<heart title="Favorite">
		<HeartSolid height="1em" />
	</heart>
{/if}

<style>
	heart {
		animation: fav 0.2s ease-in-out forwards;

		@apply absolute z-[1] bottom-0 right-0 m-[0.5ch] text-red-300 drop-shadow;
	}

	@keyframes fav {
		from {
			transform: scale(0);
		}
	}
</style>

<script>
	import HeartSolid from '~/lib/icon/HeartSolid.svelte'
	import { favorites } from '~/utils/store'

	export let id

	$: favorited = $favorites.includes(id)
</script>
