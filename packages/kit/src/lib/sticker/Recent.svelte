<section class="h-full overflow-y-auto border-t border-white/20 pt-4 <sm:-order-1">
	<h2 class="h2 sticky top-0 px-4">Recent additions</h2>

	<ul class="grid gap-4 p-4 min-w-0 <md:flex overflow-x-auto scroll-snap">
		{#each latest as sticker}
			<li class="grid gap-4 items-center px-4 rounded-lg glass-dark glass-border">
				<button class="-mt-4" on:click={() => $selected_sticker = sticker}>
					<Sticker className="m-auto" {sticker} height={120} />
				</button>

				<div>
					<p class="text-3xl">
						{#each runes(sticker.emojis) as emoji}
							<Emoji {emoji} />
						{/each}
					</p>
					<p><time class="text-xs" datetime={sticker.date}>{date(sticker.date)}</time></p>
				</div>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		grid-auto-rows: 1fr;
	}

	li {
		grid-template-columns: 60px 1fr;
		min-width: max-content;
	}
</style>

<script>
	import { page } from '$app/stores'
	import Sticker from './Sticker.svelte'
	import Emoji from '$lib/emoji/Emoji.svelte'
	import { selected_sticker } from '@/utils/store'
	import date from '@/utils/date'
	import runes from 'runes'

	const { stickers } = $page.stuff

	const latest = stickers.slice(0, 8)
</script>
