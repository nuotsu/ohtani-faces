<header class="max-w-screen-md mx-auto my-4 <md:mt-0 py-8 px-4 bg-white md:rounded text-center">
	<h1 class="font-bold text-2xl">{@html title}</h1>
	<p class="mt-2">{@html description}</p>
</header>

<script>
	import { page } from '$app/stores'

	let { site } = $page.stuff

	let title = site.title.full
		.replace(/Shohei Ohtani/g, '<strong class="inline-block text-gradient-rose">Shohei Ohtani</strong>')

	let description =  site.description
		.replace(/Shohei Ohtani/g, '<a class="link" href="#info">Shohei Ohtani</a>')
</script>
