<section id="info" class="max-w-screen-md mx-auto w-full">
	<Tabs/>

	<div class="p-4 bg-white rounded">
		<AboutPlayer index={0} />
		<PlayerStats season={2022} type="R" index={1} />
		<PlayerStats season={2022} type="S" index={2} />
		<PlayerStats season={2021} type="R" index={3} />
	</div>
</section>

<script>
	import Tabs from './Tabs.svelte'
	import AboutPlayer from './AboutPlayer.svelte'
	import PlayerStats from './PlayerStats.svelte'
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const tabs = [
		{ short: 'About', full: 'About Shohei Ohtani' },
		{ short: '2022 Season', full: '2022 Regular Season Stats' },
		{ short: '2022 Spring Training', full: '2022 Spring Training Stats' },
		{ short: '2021 Season', full: '2021 Regular Season Stats' },
	]

	export const active = writable(tabs[0].short)
</script>
