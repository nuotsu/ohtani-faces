<TabContent {index}>
	<dl>
		<dt>Name</dt>
		<dd>{player.name.en} / {player.name.jp}</dd>
	</dl>

	<blockquote>
		<p>{player.description.content}</p>
		<footer class="text-xs text-right">
			— from
			<a class="link" href={player.description.source.url} target="_blank" rel="nopener noreferrer">
				{player.description.source.name}
			</a>
		</footer>
	</blockquote>
</TabContent>

<style>
	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;
	}
</style>

<script>
	import { page } from '$app/stores'
	import TabContent from './TabContent.svelte'

	export let index

	let { player } = $page.stuff
</script>
