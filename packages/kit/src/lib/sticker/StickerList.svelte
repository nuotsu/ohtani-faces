<section>
	<h2 class="p-4">Stickers</h2>

	<div class="grid <xs:!grid-cols-4 gap-2 p-4 dots" class:selected={!!$selected_emoji}>
		{#each filtered as sticker (sticker._id)}
			<button class="my-auto" class:mx-auto={!$selected_emoji}>
				<Sticker className="w-[80px]" {sticker} width={160} />
			</button>
		{/each}
	</div>
</section>

<style>
	.grid {
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}

	.selected {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>

<script>
	import { page } from '$app/stores'
	import Sticker from './Sticker.svelte'
	import shuffle from '@/utils/shuffle'
	import { selected_emoji } from '@/utils/store'

	const { stickers } = $page.stuff

	$: filtered = !!$selected_emoji
		? stickers.filter(({ emojis }) => emojis.includes($selected_emoji))
		: shuffle(stickers)
</script>
