{#if !!$selected_emoji}
	<section class="text-center">
		<button on:click={() => $selected_emoji = null}>
			&times; {$selected_emoji}
		</button>
	</section>
{/if}

<script>
	import { selected_emoji } from '@/utils/store'
</script>
