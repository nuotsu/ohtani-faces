<ul>
	{#each stickers as sticker}
		<li>
			<Sticker {sticker} />
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

		@apply <md:grid-cols-4;
	}
</style>

<script>
	import Sticker from './Sticker.svelte'
	import { page } from '$app/stores'

	let { stickers } = $page.stuff
</script>
