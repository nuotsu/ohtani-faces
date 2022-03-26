<section class="max-w-screen-md mx-auto my-4 p-4 bg-white md:rounded">
	<h2 class="font-black text-lg">About {player.name.en}</h2>

	<dl>
		<dt>Name</dt>
		<dd>{player.name.en} / {player.name.jp}</dd>
	</dl>

	<blockquote>
		<p>{player.description.content}</p>
		<footer>
			—
			<a class="link" href={player.description.source.url} target="_blank" rel="nopener noreferrer">
				from {player.description.source.name}
			</a>
		</footer>
	</blockquote>
</section>

<script>
	import { page } from '$app/stores'

	let { player, stats } = $page.stuff
</script>
