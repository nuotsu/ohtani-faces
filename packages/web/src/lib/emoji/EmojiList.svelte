<section class="screen no-scrollbar" class:expand class:flex-wrap={expand}>
	{#each emojis as emoji}
		<Emoji {emoji} {expand} closeDetailsOnClick />
	{/each}

	<FilterFavorites {expand} />

	<ExpandButton {expand} on:click={() => (expand = !expand)} />
</section>

<style>
	section {
		@apply
			sticky top-0 z-10 overflow-x-auto
			flex gap-[0.3ch] max-w-screen-md p-2 mx-auto mb-4
			text-xl md:rounded;
	}

	div:not(.expand)::after {
		content: '';
		border-right: 1px solid transparent;
		margin-left: -1px;
	}
</style>

<script>
	import { page } from '$app/stores'
	import Emoji from './Emoji.svelte'
	import FilterFavorites from './FilterFavorites.svelte'
	import ExpandButton from './ExpandButton.svelte'

	let { emojis } = $page.stuff

	let expand = false
</script>
