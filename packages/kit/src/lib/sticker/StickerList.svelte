<section class="max-w-screen-2xl mx-auto dots">
	<ul class:selected={!!$selected_emoji}>
		{#each filtered as sticker (sticker._id)}
			<button class="my-auto" on:click={() => $selected_sticker = sticker}>
				<Sticker {sticker} height={200} />
			</button>
		{/each}
	</ul>
</section>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
		gap: 1rem;
		padding: 1rem;
	}

	.selected {
		display: flex;
		justify-content: center;
	}

	.selected button {
		margin: initial;
		max-width: 80px;
	}

	@screen <xs {
		ul {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>

<script>
	import { page } from '$app/stores'
	import Sticker from './Sticker.svelte'
	import { selected_emoji, selected_sticker } from '@/utils/store'
	import runes from 'runes'

	const { stickers } = $page.stuff

	$: filtered = stickers
		.filter(({ emojis }) => !$selected_emoji || runes(emojis).includes($selected_emoji))
</script>
