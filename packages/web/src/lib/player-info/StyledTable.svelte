<div class="pb-1 md:px-1 no-scrollbar <md:full-width">
	<table class="bg-white text-center rounded overflow-hidden shadow">
		<slot></slot>
	</table>
</div>

<style>
	div {
		@apply overflow-x-auto <md:px-8;
	}

	table :global(:is(th, td):nth-child(even)) {
		@apply bg-rose-300 bg-opacity-10;
	}

	table :global(:is(th, td)) {
		padding: 0.25em 1em;
	}
</style>
