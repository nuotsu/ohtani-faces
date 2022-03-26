<div class="flex items-end gap-2 -mb-2">
	{#each tabs as tab}
		<button
			class="bg-white rounded-t"
			on:click={() => onClick(tab.short)}
		>
			{tab.short}
		</button>
	{/each}
</div>

<style>
	button {
		padding: 0.25em 0.5em 0.5em;
	}
</style>

<script>
	import { tabs, active } from './PlayerInfo.svelte'

	function onClick(tab) {
		$active = tab
	}
</script>
