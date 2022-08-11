<section class="grow relative z-[1] flex flex-col">
	<header class="flex gap-4 items-center p-4 pb-0">
		<h2 class="h2">Stickers</h2>

		<Shuffle/>
	</header>

	<div class="grow dots text-gray-300">
		<div
			class="grid <xs:!grid-cols-4 gap-2 p-4"
			class:selected={!!$selected_emoji}
			style:--size="{$sticker_size}px"
		>
			{#each filtered as sticker, i (sticker._id + i + $shuffled)}
				<button
					class="my-auto anim-fade"
					class:mx-auto={!$selected_emoji}
					style:--delay={i}
					style:order={$shuffled ? random() : 1}
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
		--size: 100px;
		grid-template-columns: repeat(auto-fill, minmax(var(--size), 1fr));
	}

	.selected {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		@apply <sm:justify-evenly;
	}

	@screen sm {
		.selected button {
			max-width: var(--size);
		}
	}

	@screen <sm {
		.selected button {
			max-width: max(100px, calc(100% / 3 - 1rem));
		}
	}

	button:hover :global(.sticker) {
		transform-origin: top;
		animation: hover 0.5s ease-in-out;
	}

	@keyframes hover {
		25% { transform: rotate(-4deg); }
		50% { transform: rotate(2deg); }
		75% { transform: rotate(-2deg); }
	}
</style>

<script>
	import { page } from '$app/stores'
	import Shuffle, { shuffled } from './Shuffle.svelte'
	import Sticker from './Sticker.svelte'
	import { selected_emoji, selected_sticker } from '@/utils/store'
	import { sticker_size } from '$lib/settings/StickerSize.svelte'

	const { stickers } = $page.stuff

	$: filtered = !!$selected_emoji
		? stickers.filter(({ emojis }) => emojis.includes($selected_emoji))
		: stickers

	const random = () => Math.floor(Math.random() * filtered.length)
</script>
