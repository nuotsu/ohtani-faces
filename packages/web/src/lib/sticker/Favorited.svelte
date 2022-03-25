{#if favorited}
	<heart title="Favorite">
		<HeartSolid height="1em" />
	</heart>
{/if}

<style>
	heart {
		position: absolute;
		z-index: 1;
		bottom: 0;
		right: 0;
		margin: 0.5ch;
		animation: fav 0.2s ease-in-out forwards;

		@apply text-red-300 drop-shadow;
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
