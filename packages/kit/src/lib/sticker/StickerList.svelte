<section>
	<ul>
		{#each stickers as sticker}
			<Sticker {sticker}
				className="m-auto"
				height={200}
			/>
		{/each}
	</ul>
</section>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
	}
</style>

<script>
	import { page } from '$app/stores'
	import Sticker from './Sticker.svelte'

	const { stickers } = $page.stuff
</script>
