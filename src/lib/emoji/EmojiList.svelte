<div class:flex-wrap={expand}>
	{#each emojis as emoji}
		<Emoji {emoji} closeDetailsOnClick />
	{/each}

	<ExpandButton {expand} on:click={() => (expand = !expand)} />
</div>

<style>
	div {
		position: sticky;
		top: 0;
		z-index: 1;
		display: flex;
		overflow-x: auto;
	}
</style>

<script lang="ts">
	import { page } from '$app/stores'
	import Emoji from './Emoji.svelte'
	import ExpandButton from './ExpandButton.svelte'

	let { emojis }: Stuff = $page.stuff

	let expand: boolean = false
</script>
