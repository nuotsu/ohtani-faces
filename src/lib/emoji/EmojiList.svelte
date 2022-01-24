<div class="screen no-scrollbar" class:expand class:flex-wrap={expand}>
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
		gap: 0.3ch;
		overflow-x: auto;
		padding: 0.25rem;
		margin-inline: auto;
		width: 100%;

		@apply max-w-screen-md text-xl md:rounded;
	}

	div:not(.expand)::after {
		content: '';
		border-right: 1px solid transparent;
		margin-left: -1px;
	}
</style>

<script lang="ts">
	import { page } from '$app/stores'
	import Emoji from './Emoji.svelte'
	import ExpandButton from './ExpandButton.svelte'

	let { emojis }: Stuff = $page.stuff

	let expand: boolean = false
</script>
