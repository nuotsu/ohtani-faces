<a
	class="group grid gap-4"
	href={url} target="_blank" rel="noopener noreferrer"
>
	<figure class="aspect-square sticky top-0">
		<img
			class="w-full h-full object-cover rounded"
			src={urlToImage} alt={title}
			loading="lazy"
		>
	</figure>

	<div class="self-center">
		<p class="flex flex-wrap justify-between gap-x-4 group-hover:text-rose-300 text-gray-400 text-xs mb-1">
			<time class="uppercase" datetime={publishedAt}>
				{dateformat(publishedAt, 'mmm d, yyyy')}
			</time>

			<span class="text-right">{source.name}</span>
		</p>

		<h3 class="group-hover:text-rose-700 leading-tight <md:text-sm">{title}</h3>
	</div>
</a>

<style>
	a {
		grid-template-columns: 80px 1fr;
	}
</style>

<script>
	import dateformat from 'dateformat'

	export let title, publishedAt, source, url, urlToImage
</script>
