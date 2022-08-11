{#if !!sticker}
	{#key sticker._id}
		<section
			id="selected-sticker"
			class="relative p-4 dots text-white/10 text-center border-t border-white/20 <sm:order-1"
		>
			<div class="grid gap-2 text-white anim-fade-r">
				<button
					class="absolute -top-4 right-0 z-[1] text-3xl opacity-60 transition-transform hover:scale-125"
					on:click={() => $selected_sticker = null}
				>
					&times;
				</button>

				<div class="relative">
					<Sticker
						className="mx-auto h-auto max-h-[250px] text-[0]"
						{sticker}
						height={500}
					/>

					<p class="absolute right-0 bottom-0 text-xs opacity-50">
						<time datetime={sticker.date}>{date(sticker.date)}</time>
					</p>
				</div>

				<p class="absolute left-0 top-0 flex flex-col text-3xl rounded-lg p-2 glass-dark glass-border">
					{#each runes(sticker.emojis) as emoji}
						<Emoji {emoji} />
					{/each}
				</p>

				<p class="grid grid-cols-2 gap-2">
					<Share {sticker} />
					<Source {sticker} />
				</p>
			</div>
		</section>

		<SelectedStickerLink />
	{/key}
{/if}

<script>
	import { selected_sticker } from '@/utils/store'
	import Sticker from './Sticker.svelte'
	import Emoji from '../emoji/Emoji.svelte'
	import Share from './Share.svelte'
	import Source from './Source.svelte'
	import SelectedStickerLink from './SelectedStickerLink.svelte'
	import date from '@/utils/date'
	import runes from 'runes'

	$: sticker = $selected_sticker
</script>
