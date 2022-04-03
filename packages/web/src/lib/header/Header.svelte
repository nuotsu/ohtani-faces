<header class="max-w-screen-md grid gap-4 mx-auto my-4 <md:mt-0 py-8 px-4 bg-white md:rounded text-center">
	<h1 class="font-bold text-2xl">{@html title}</h1>
	<p>{site.description}</p>

	<QuickLinks/>
</header>

<script>
	import { page } from '$app/stores'
	import QuickLinks from './QuickLinks.svelte'

	let { site } = $page.stuff

	let title = site.title.full
		.replace(/Shohei Ohtani/g, '<strong class="inline-block text-gradient-rose">Shohei Ohtani</strong>')
</script>
