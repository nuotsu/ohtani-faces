<TabContent {index}>
	{#if !!hitting && !!pitching}
		<section>
			<h3 class="subdued">🏏 Hitting</h3>
			<StyledTable>
				<tr class="gradient-rose">
					<th><abbr title="Games">G</abbr></th>
					<th><abbr title="At Bats">AB</abbr></th>
					<th><abbr title="Runs">R</abbr></th>
					<th><abbr title="Hits">H</abbr></th>
					<th><abbr title="Doubles">2B</abbr></th>
					<th><abbr title="Triples">3B</abbr></th>
					<th><abbr title="Home Runs">HR</abbr></th>
					<th><abbr title="Runs Batted In">RBI</abbr></th>
					<th><abbr title="Stolen Bases">SB</abbr></th>
					<th><abbr title="Batting Average">AVG</abbr></th>
					<th><abbr title="On-base Percentage">OBP</abbr></th>
					<th><abbr title="Slugging Percentage">SLG</abbr></th>
				</tr>
				<tr>
					<td>{hitting.g}</td>
					<td>{hitting.ab}</td>
					<td>{hitting.r}</td>
					<td>{hitting.h}</td>
					<td>{hitting.d}</td>
					<td>{hitting.t}</td>
					<td>{hitting.hr}</td>
					<td>{hitting.rbi}</td>
					<td>{hitting.sb}</td>
					<td>{hitting.avg}</td>
					<td>{hitting.obp}</td>
					<td>{hitting.slg}</td>
				</tr>
			</StyledTable>
		</section>

		<section>
			<h3 class="subdued">⚾️ Pitching</h3>
			<StyledTable>
				<tr class="gradient-rose">
					<th><abbr title="Games">G</abbr></th>
					<th><abbr title="Wins">W</abbr></th>
					<th><abbr title="Losses">L</abbr></th>
					<th><abbr title="Earned Run Average">ERA</abbr></th>
					<th><abbr title="Innings Pitched">IP</abbr></th>
					<th><abbr title="Walks + Hits / Innings Pitched">WHIP</abbr></th>
					<th><abbr title="Number of Pitches Thrown">NP</abbr></th>
					<th><abbr title="Strikeouts">SO</abbr></th>
				</tr>
				<tr>
					<td>{pitching.g}</td>
					<td>{pitching.w}</td>
					<td>{pitching.l}</td>
					<td>{pitching.era}</td>
					<td>{pitching.ip}</td>
					<td>{pitching.whip}</td>
					<td>{pitching.np}</td>
					<td>{pitching.so}</td>
				</tr>
			</StyledTable>
		</section>

	{:else}
		<p class="text-gray-300 text-center py-8">
			Coming soon... 🤓
		</p>
	{/if}

	<Cite url="https://appac.github.io/mlb-data-api-docs/">
		MLB Data API
	</Cite>
</TabContent>

<style>
	h3 {
		@apply uppercase tracking-wider mb-1;
	}
</style>

<script>
	import { page } from '$app/stores'
	import TabContent from './TabContent.svelte'
	import StyledTable from './StyledTable.svelte'
	import Cite from '~/lib/Cite.svelte'

	export let season, type, index

	let { stats } = $page.stuff

	let [hitting, pitching] = stats[season][type]
</script>
