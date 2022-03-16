<div class="action with-icon">
	<slot />
</div>

{#if !!image}
	<figure class="anim-fadein">
		<img {src} class="drop-shadow-md {className}" {alt} draggable="false" />
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

<script>
	import { urlFor } from '~/utils/sanity'

	export let image, alt = '', className

	$: src = !!image && urlFor(image).height(160).url()
</script>
