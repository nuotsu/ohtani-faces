<button
	class="text-xs"
	class:opacity-30={!$shuffled}
	on:click={() => $shuffled = !$shuffled}
>
	🔀 Shuffle {$shuffled ? 'on' : 'off'}
</button>

<script context="module">
	import { writable } from 'svelte/store'

	export const shuffled = writable(false)
</script>
