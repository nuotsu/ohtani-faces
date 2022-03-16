<button on:click={onClick} title="Close details">×</button>

<style>
	button {
		position: absolute;
		top: 0;
		right: 0;
		display: grid;
		place-content: center;
		width: 1.2em;
		height: 1.2em;
	}

	button:not(:hover) {
		opacity: 0.2;
	}
</style>

<script>
	import { selectedSticker } from '~/utils/store'

	function onClick() {
		$selectedSticker = false
	}
</script>
