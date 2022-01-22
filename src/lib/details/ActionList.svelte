<div>
	<ShareDownloadButton />
	<SourceButton />
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5ch;
		align-items: end;
	}
</style>

<script lang="ts">
	import ShareDownloadButton from './ShareDownloadButton.svelte'
	import SourceButton from './SourceButton.svelte'
</script>
