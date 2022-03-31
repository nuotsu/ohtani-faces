<div class="action with-icon w-full">
	<slot />
</div>

{#if !!image}
	<figure class="select-none w-full px-4 transform transition-transform anim-fadein">
		<img {src} class={className} {alt} draggable="false" />
	</figure>
{/if}

<style>
	img {
		@apply mx-auto h-[80px] object-cover drop-shadow-md;
	}
</style>

<script>
	import { urlFor } from '~/utils/sanity'

	export let image, alt = '', className

	$: src = !!image && urlFor(image).height(160).url()
</script>
