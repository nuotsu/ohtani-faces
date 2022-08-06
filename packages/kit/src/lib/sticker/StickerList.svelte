<section class="dots max-w-screen-2xl mx-auto">
	<ul>
		{#each stickers as sticker}
			<button class="m-auto">
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

	@screen <xs {
		ul {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>

<script>
	import { page } from '$app/stores'
	import Sticker from './Sticker.svelte'

	const { stickers } = $page.stuff
</script>
