<TabContent {index}>
	<dl>
		<dt>Name</dt>
		<dd>
			<span>{info.name_display_first_last}</span> /
			<span>{player.name.jp}</span>
		</dd>

		<dt>Jersey</dt>
		<dd>#{info.jersey_number}</dd>

		<dt>Date of Birth</dt>
		<dd>
			<span>{dateformat(info.birth_date, 'mmmm d, yyyy')}</span>
			<span>({info.age} years)</span>
		</dd>

		<dt>Height</dt>
		<dd>{info.height_feet}' {info.height_inches}</dd>

		<dt>Weight</dt>
		<dd>{info.weight} lbs</dd>
	</dl>

	<Cite url="https://appac.github.io/mlb-data-api-docs/">MLB Data API</Cite>

	<blockquote class="<md:text-sm">
		<p class="border-l-2 border-gray-100 pl-4">{content}</p>
		<Cite thing="Quote" url={source.url}>{source.name}</Cite>
	</blockquote>
</TabContent>

<style>
	dl {
		grid-template-columns: auto 1fr;

		@apply grid gap-x-4 max-w-max mx-auto;
	}

	dt {
		@apply text-gray-400 text-right;
	}

	span {
		display: inline-block;
	}
</style>

<script>
	import { page } from '$app/stores'
	import TabContent from './TabContent.svelte'
	import dateformat from 'dateformat'
	import Cite from '~/lib/Cite.svelte'

	export let index

	let { player, playerInfo: info } = $page.stuff
	let { content, source } = player.description
</script>
