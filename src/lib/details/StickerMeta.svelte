<div>
	<time datetime={meta.date}>
		{formatDate(meta.date)}
	</time>

	{#if meta.description}
		<p>{meta.description}</p>
	{/if}
</div>

<style>
	div {
		padding: 0.5rem;

		@apply bg-gray-200 bg-opacity-40 text-sm rounded;
	}

	time {
		text-transform: uppercase;

		@apply text-gray-400 text-xs;
	}
</style>

<script lang="ts">
	export let meta: StickerMeta

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		})
	}
</script>
