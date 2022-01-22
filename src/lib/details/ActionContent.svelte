<div class="action">
	<slot />
</div>

{#if !!image}
	<figure>
		<img {src} alt="" draggable="false" />
	</figure>
{/if}

<style>
	figure {
		padding-inline: 1rem;

		@apply transform transition-transform;
	}

	img {
		margin-inline: auto;
	}
</style>

<script lang="ts">
	import { urlFor } from '$lib/utils/sanity'

	export let image

	$: src = !!image && urlFor(image).height(160).url()
</script>
