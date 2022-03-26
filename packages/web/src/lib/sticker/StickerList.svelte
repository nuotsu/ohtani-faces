<section>
	<ul>
		{#each filteredStickers as sticker (sticker._id)}
			<li>
				<Sticker {sticker} />
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		position: relative;
		z-index: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		gap: 3px;
		padding: 3px;
		background-color: #fff;

		@apply <sm:grid-cols-4;
	}
</style>

<script>
	import Sticker from './Sticker.svelte'
	import { page } from '$app/stores'
	import { favorites, favoritesFiltered, selectedEmoji } from '~/utils/store'

	let { stickers } = $page.stuff

	$: filteredStickers = stickers.filter(sticker => {
		if (!!$selectedEmoji) {
			return sticker.emojis.includes($selectedEmoji)
		}

		if ($favoritesFiltered) {
			return $favorites.includes(sticker._id)
		}

		return stickers
	})
</script>
