<section id="stickers">
	<ul class="relative z-0 grid gap-[3px] p-[3px] bg-white">
		{#each filteredStickers as sticker (sticker._id)}
			<li>
				<Sticker {sticker} />
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		grid-template-columns: repeat(auto-fill, minmax(var(--size, 100px), 1fr));
	}

	@screen <sm {
		ul {
			--size: 75px;
		}
	}

	ul:empty::after {
		content: 'No faces... 🤭';

		@apply col-span-full p-8 block text-center text-gray-300;
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
