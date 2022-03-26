{#if !!$selectedEmoji}
	<div
		class="flex items-center gap-[0.5ch] mx-auto my-2 max-w-max"
		transition:fly={{ x: 20 }}
	>
		<span class="with-icon text-gray-400 text-xs">
			<FilterIcon height="1em" />
			Filter:
		</span>

		<button
			class="px-2 bg-white rounded-full"
			title="Remove filter"
			on:click={onClick}
		>
			{$selectedEmoji} <span>×</span>
		</button>
	</div>
{/if}

<style>
	button:not(:hover) span {
		opacity: 0.2;
	}
</style>

<script>
	import { selectedEmoji } from '~/utils/store'
	import { fly } from 'svelte/transition'
	import FilterIcon from '~/lib/icon/Filter.svelte'

	function onClick() {
		$selectedEmoji = false
	}
</script>
