<button on:click={onClick}>Close</button>

<script lang="ts">
	import { selectedSticker } from '$lib/utils/store'

	function onClick(): void {
		$selectedSticker = false
	}
</script>
