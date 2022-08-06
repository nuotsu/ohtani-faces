<svelte:head>
	<title>{site.title.full}</title>
</svelte:head>

<header class="text-center">
	{site.title.full}
</header>

<script>
	import { page } from '$app/stores'

	const { site } = $page.stuff
</script>
