<div class="no-scrollbar">
	{#each tabs as tab}
		<button
			class="bg-white rounded-t after:gradient-rose"
			class:active={$active === tab.short}
			on:click={() => onClick(tab.short)}
		>
			{tab.short}
		</button>
	{/each}
</div>

<style>
	div {
		@apply relative z-[1] flex items-end gap-1 -mb-2 overflow-x-auto;
	}

	button {
		position: relative;
		white-space: nowrap;
		padding: 0.25em 0.75em 0.5em;
	}

	.active {
		@apply sticky left-0 right-0 z-[1];
	}

	.active::after {
		content: '';
		display: block;
		height: 2px;
		transform-origin: left;
		animation: appear 0.2s ease-in-out forwards;
	}

	@keyframes appear {
		from {
			transform: scaleX(0);
		}
	}

	button:not(.active) {
		@apply opacity-50;
	}
</style>

<script>
	import { tabs, active } from './PlayerInfo.svelte'

	function onClick(tab) {
		$active = tab
	}
</script>
