<header class="max-w-screen-md mx-auto my-4 <md:mt-0 py-8 px-4 bg-white md:rounded text-center">
	<h1 class="font-black text-2xl">{@html title}</h1>
	<p class="mt-2">{site.description}</p>
</header>

<style>
	h1 :global(strong) {
		@apply inline-block;
	}
</style>

<script>
	import { page } from '$app/stores'

	let { site } = $page.stuff

	let title = site.title.full.replace(/Shohei Ohtani/g, '<strong class="text-gradient-rose">Shohei Ohtani</strong>')
</script>
