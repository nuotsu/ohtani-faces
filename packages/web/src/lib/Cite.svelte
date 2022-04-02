<p class="text-gray-400 text-xs text-right first-letter:capitalize">
	{thing} from
	<a class="link" href={url} target="_blank" rel="noopener noreferrer">
		<slot></slot>
	</a>
</p>

<script>
	export let thing = 'data', url
</script>
