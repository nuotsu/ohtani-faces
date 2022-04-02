<div class="no-scrollbar <md:full-width">
	<table>
		<slot></slot>
	</table>
</div>

<style>
	div {
		@apply overflow-x-auto <md:px-8;
	}

	table {
		@apply bg-white text-center rounded overflow-hidden;
	}

	table :global(:is(th, td):nth-child(even)) {
		@apply bg-rose-300 bg-opacity-10;
	}

	table :global(:is(th, td)) {
		padding: 0.25em 1em;
	}
</style>
