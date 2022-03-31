<button
	on:click={() => $selectedSticker = false}
	title="Close details"
>
	&times;
</button>

<style>
	button {
		width: 1.2em;
		height: 1.2em;

		@apply absolute top-0 right-0 grid place-content-center text-xl rounded-full;
	}

	button:not(:hover) {
		opacity: 0.2;
	}
</style>

<script>
	import { selectedSticker } from '~/utils/store'
</script>
