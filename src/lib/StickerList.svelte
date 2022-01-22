<ul>
	{#each filteredStickers as sticker (sticker._id)}
		<li>
			<Sticker {sticker} />
		</li>
	{/each}
</ul>

<style>
	ul {
		position: relative;
		z-index: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		gap: 3px;

		@apply <sm:grid-cols-4;
	}
</style>

<script lang="ts">
	import Sticker from './Sticker.svelte'
	import { page } from '$app/stores'
	import { selectedEmoji } from './utils/store'

	let { stickers }: Stuff = $page.stuff

	$: filteredStickers = stickers.filter(sticker =>
		!!$selectedEmoji ? sticker.emotion.emoji.includes($selectedEmoji) : stickers
	)
</script>
