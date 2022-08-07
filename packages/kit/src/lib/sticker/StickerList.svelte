<section class="grow relative z-[1] flex flex-col bg-white">
	<h2 class="h2 p-4">Stickers</h2>

	<div class="grow dots">
		<div
			class="grid <xs:!grid-cols-4 gap-2 p-4"
			class:selected={!!$selected_emoji}
			style:--size="{$sticker_size}px"
		>
			{#each filtered as sticker, i (sticker._id + i)}
				<button
					class="my-auto anim-fade"
					class:mx-auto={!$selected_emoji}
					style:--delay={i}
					on:click={() => $selected_sticker = sticker}
				>
					<Sticker {sticker} width={300} />
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid {
		grid-template-columns: repeat(auto-fill, minmax(var(--size, 100px), 1fr));
	}

	.selected {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.selected button {
		max-width: var(--size, 100px);
	}
</style>

<script>
	import { page } from '$app/stores'
	import Sticker from './Sticker.svelte'
	import shuffle from '@/utils/shuffle'
	import { selected_emoji, selected_sticker } from '@/utils/store'
	import { sticker_size } from '$lib/settings/StickerSize.svelte'

	const { stickers } = $page.stuff

	$: filtered = !!$selected_emoji
		? stickers.filter(({ emojis }) => emojis.includes($selected_emoji))
		: shuffle(stickers)
</script>
