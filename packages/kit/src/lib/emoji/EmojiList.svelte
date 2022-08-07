<section class="sticky top-0 z-[1] p-4 glass">
	<h2>Emojis</h2>
	<nav class="grid gap-1 text-2xl">
		{#each shuffle(emojis) as emoji}
			<Emoji {emoji} />
		{/each}
	</nav>
</section>

<style>
	.grid {
		grid-template-columns: repeat(auto-fill, minmax(1em, 1fr));
	}
</style>

<script>
	import { page } from '$app/stores'
	import Emoji from './Emoji.svelte'
	import shuffle from '@/utils/shuffle'

	const { emojis } = $page.stuff
</script>
