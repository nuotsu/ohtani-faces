<section class="sticky top-0 z-[2] glass">
	<header class="flex gap-4 items-center p-4 pb-0">
		<h2 class="h2">Emojis</h2>

		<SelectedEmoji/>
	</header>

	<nav class="gap-1 text-2xl p-4 pt-0 overflow-x-auto no-scrollbar" class:expanded>
		{#each shuffle(emojis) as emoji}
			<Emoji {emoji} unselectSticker />
		{/each}

		<button class="action sticky right-0 text-base" on:click={() => expanded = !expanded}>
			{expanded ? 'Collapse' : 'Expand'}
		</button>
	</nav>
</section>

<style>
	nav:not(.expanded) {
		display: flex;
		@apply sm:text-4xl;
	}

	nav.expanded {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(1em, 1fr));
	}

	button {
		grid-column: span 3;

		@apply <md:col-span-full;
	}

	nav:not(.expanded) button {
		@apply ml-4
	}
</style>

<script>
	import { page } from '$app/stores'
	import SelectedEmoji from './SelectedEmoji.svelte'
	import Emoji from './Emoji.svelte'
	import shuffle from '@/utils/shuffle'

	const { emojis } = $page.stuff

	let expanded = false
</script>
