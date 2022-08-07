{#if !!sticker}
	{#key sticker._id}
		<section class="relative p-4 text-center border-t border-white/20 <sm:order-1">
			<div class="anim-fade-r">
				<button
					class="absolute top-0 right-0 z-[1]"
					on:click={() => $selected_sticker = null}
				>
					&times;
				</button>

				<Sticker
					className="mx-auto h-[160px] text-[0]"
					{sticker}
					height={320}
				/>

				<p class="text-3xl">
					{#each runes(sticker.emojis) as emoji}
						<Emoji {emoji} />
					{/each}
				</p>

				<p><time datetime={sticker.date}>{sticker.date}</time></p>
			</div>
		</section>
	{/key}
{/if}

<script>
	import { selected_sticker } from '@/utils/store'
	import Sticker from './Sticker.svelte'
	import Emoji from '../emoji/Emoji.svelte'
	import runes from 'runes'

	$: sticker = $selected_sticker
</script>
