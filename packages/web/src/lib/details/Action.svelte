{#if !!href}
	<a class="root" {href} {target}>
		<ActionContent {image} {className} {alt}>
			<slot />
		</ActionContent>
	</a>
{:else}
	<button class="root" on:click {disabled}>
		<ActionContent {image} {className} {alt}>
			<slot />
		</ActionContent>
	</button>
{/if}

<style>
	.root {
		display: flex;
		flex-direction: column-reverse;
		gap: 0.25rem;
	}

	.root:not(:hover) :global(figure) {
		@apply translate-y-2;
	}
</style>

<script>
	import ActionContent from './ActionContent.svelte'

	export let image, alt = '', href, target, disabled, className
</script>
