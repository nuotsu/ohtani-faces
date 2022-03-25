<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="" />
</svelte:head>

<slot></slot>

<script>
	let title = 'The Faces of Shohei Ohtani'
	let description = 'Web app to share faces stickers of Angels MVP Shohei Ohtani.'
</script>
