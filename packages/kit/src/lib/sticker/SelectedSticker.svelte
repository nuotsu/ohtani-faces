{#if !!$selected_sticker}
	{#key $selected_sticker._id}
		<section class="relative glass p-2 mx-auto">
			<button class="absolute top-0 right-0" on:click={() => $selected_sticker = null}>
				&times;
			</button>

			<Sticker
				className="h-[200px]"
				sticker={$selected_sticker}
				height={300}
			/>

			<nav>
				{#each runes($selected_sticker.emojis) as emoji}
					<Emoji {emoji} />
				{/each}
			</nav>
		</section>
	{/key}
{/if}

<style>
	section {
		position: sticky;
		bottom: 0;
		max-width: max-content;
	}
</style>

<script>
	import { selected_sticker, selected_emoji } from '@/utils/store'
	import runes from 'runes'
	import Emoji from '@/lib/emoji/Emoji.svelte'
	import Sticker from './Sticker.svelte'
</script>
