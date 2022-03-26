<article hidden={$active !== title.short}>
	<h2 class="font-black text-lg mb-2">{title.full}</h2>

	<slot></slot>
</article>

<style>
	article {
		animation: appear 0.2s ease-in-out forwards;
	}

	@keyframes appear {
		from {
			opacity: 0;
			transform: translateX(-1rem);
		}
	}
</style>

<script>
	import { tabs, active } from './PlayerInfo.svelte'

	export let index

	let title = tabs[index]
</script>
