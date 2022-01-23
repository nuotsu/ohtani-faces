<div class="action with-icon">
	<slot />
</div>

{#if !!image}
	<figure class="anim-fadein">
		<img {src} class="drop-shadow-md {className}" alt="" draggable="false" />
	</figure>
{/if}

<style>
	.action {
		width: 100%;
	}

	figure {
		width: 100%;
		padding-inline: 1rem;

		@apply transform transition-transform;
	}

	img {
		margin-inline: auto;
		height: 80px;
		object-fit: cover;
	}
</style>

<script lang="ts">
	import { urlFor } from '$lib/utils/sanity'

	export let image: string | null = null
	export let className: string | null = null

	$: src = !!image && urlFor(image).height(160).url()
</script>
