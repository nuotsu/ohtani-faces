<a
	class="group grid gap-4 <md:gap-3"
	href={url} target="_blank" rel="noopener noreferrer"
>
	<figure class="aspect-square sticky top-0">
		{#if !!image_url}
			<img
				class="w-full h-full object-cover rounded shadow-md"
				src={image_url} alt={title}
				width="100" height="100" loading="lazy"
			/>
		{:else}
			<placeholder class="block w-full h-full bg-gray-100 rounded" />
		{/if}
	</figure>

	<div class="self-center grid gap-1">
		<time class="subdued uppercase" datetime={published_at}>
			{dateformat(published_at, 'mmm d, yyyy hTT')}
		</time>

		<h3 class="group-hover:text-rose-700 leading-tight <md:text-sm">{title}</h3>

		<p class="subdued">{source}</p>
	</div>
</a>

<style>
	a {
		grid-template-columns: var(--img, 80px) 1fr;
	}

	@screen <md {
		a { --img: 60px; }
	}

	.subdued {
		@apply group-hover:text-rose-300;
	}
</style>

<script>
	import dateformat from 'dateformat'

	export let title, description, url, image_url, published_at, source

	// let { thumbnail } = image
	// let [source] = provider
</script>
