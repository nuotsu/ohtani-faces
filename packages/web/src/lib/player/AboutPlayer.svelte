<TabContent {index}>
	<dl>
		<dt>Name</dt>
		<dd>{player.name.en} / {player.name.jp}</dd>

		<dt>Jersey</dt>
		<dd>#{info.jersey_number}</dd>

		<dt>Height</dt>
		<dd>{info.height_feet}' {info.height_inches}</dd>

		<dt>Weight</dt>
		<dd>{info.weight} lbs</dd>

		<dt>Age</dt>
		<dd>{info.age}</dd>
	</dl>

	<p class="text-xs text-right">
		Data from
		<a class="link" href="https://appac.github.io/mlb-data-api-docs/" target="_blank" rel="noopener noreferrer">
			MLB Data API
		</a>
	</p>

	<blockquote class="border-l-2 border-gray-100 pl-4 <md:text-sm">
		<p>{content}</p>
		<footer class="text-xs text-right">
			— from
			<a class="link" href={source.url} target="_blank" rel="nopener noreferrer">
				{source.name}
			</a>
		</footer>
	</blockquote>
</TabContent>

<style>
	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0 1rem;

		@apply max-w-max mx-auto;
	}

	dt {
		@apply text-gray-400;
	}
</style>

<script>
	import { page } from '$app/stores'
	import TabContent from './TabContent.svelte'

	export let index

	let { player, playerInfo: info } = $page.stuff
	let { content, source } = player.description
</script>
