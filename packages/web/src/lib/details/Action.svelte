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
		@apply flex flex-col-reverse gap-1;
	}

	.root:not(:hover) :global(figure) {
		@apply translate-y-2;
	}
</style>

<script>
	import ActionContent from './ActionContent.svelte'

	export let image, alt = '', href, target, disabled, className
</script>
