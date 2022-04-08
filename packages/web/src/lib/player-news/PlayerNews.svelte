<section id="news" class="max-w-screen-md mx-auto w-full grid gap-4 p-4 bg-white rounded">
	<h2 class="font-bold text-lg">Shohei Ohtani News</h2>

	<div class="news relative">
		{#if !!$page.stuff.news}
			<ul class="grid gap-4 overflow-y-auto pb-8">
				{#each news as article}
					<li>
						<News {...article} />
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<Cite url="https://www.microsoft.com/en-us/bing/apis/bing-news-search-api">Bing News</Cite>
</section>

<style>
	ul {
		max-height: max(60vh, 300px);

		@apply md:max-h-[300px];
	}

	.news:empty::before {
		content: 'News currently unavailable.';

		@apply relative z-[1] block py-8 text-center text-gray-300;
	}

	.news::after {
		content: '';
		pointer-events: none;
		position: absolute;
		inset: auto 0 0;
		height: 4rem;

		@apply bg-gradient-to-t from-white to-transparent;
	}
</style>

<script>
	import { page } from '$app/stores'
	import Cite from '~/lib/Cite.svelte'
	import News from './News.svelte'

	let news = $page.stuff.news?.sort((a, b) => {
		let a_date = (new Date(a.datePublished)).getTime()
		let b_date = (new Date(b.datePublished)).getTime()
		return b_date - a_date
	}) || []
</script>
