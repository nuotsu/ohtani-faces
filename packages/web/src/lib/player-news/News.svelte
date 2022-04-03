<a
	class="group grid gap-4 <md:gap-3"
	href={url} target="_blank" rel="noopener noreferrer"
>
	<figure class="aspect-square sticky top-0">
		<img
			class="w-full h-full object-cover rounded shadow-md"
			src={thumbnail.contentUrl} alt={name}
			width="100" height="100" loading="lazy"
		/>
	</figure>

	<div class="self-center grid gap-1">
		<time class="subdued uppercase" datetime={datePublished}>
			{dateformat(datePublished, 'mmm d, yyyy')}
		</time>

		<h3 class="group-hover:text-rose-700 leading-tight <md:text-sm">{name}</h3>

		<p class="subdued">{source.name}</p>
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

	export let name, url, image, provider, datePublished

	let { thumbnail } = image
	let [source] = provider

	console.debug(image)
</script>
