<section class="max-w-screen-md mx-auto grid gap-4 p-4 bg-white rounded">
	<h2 class="font-bold text-lg">Shohei Ohtani News</h2>

	<ul class="grid gap-4 overflow-y-auto">
		{#each news as article}
			<li>
				<News {...article} />
			</li>
		{/each}
	</ul>

	<Cite url="https://newsapi.org/">News API</Cite>
</section>

<style>
	ul {
		max-height: max(60vh, 300px);

		@apply md:max-h-[300px];
	}
</style>

<script>
	import { page } from '$app/stores'
	import Cite from '~/lib/Cite.svelte'
	import News from './News.svelte'

	let { news } = $page.stuff

	console.debug(news)
</script>
