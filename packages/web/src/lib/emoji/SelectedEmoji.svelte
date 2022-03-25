{#if !!$selectedEmoji}
	<div transition:fly={{ x: 20 }}>
		<span class="with-icon text-gray-400 text-xs">
			<FilterIcon />
			Filter:
		</span>

		<button on:click={onClick} title="Remove filter">
			{$selectedEmoji}
			<span>×</span>
		</button>
	</div>
{/if}

<style>
	div {
		display: flex;
		align-items: center;
		gap: 0.5ch;
		margin-inline: auto;
	}

	button {
		padding: 0 0.5em;
		background-color: #fff;

		@apply rounded-full;
	}

	button:not(:hover) span {
		opacity: 0.2;
	}
</style>

<script>
	import { selectedEmoji } from '~/utils/store'
	import { fly } from 'svelte/transition'
	import FilterIcon from '$lib/icon/Filter.svelte'

	function onClick() {
		$selectedEmoji = false
	}
</script>
