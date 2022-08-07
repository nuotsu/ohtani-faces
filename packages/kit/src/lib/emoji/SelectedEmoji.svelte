{#if !!$selected_emoji}
	<button class="anim-fade-r" on:click={() => $selected_emoji = null}>
		&times; {$selected_emoji}
	</button>
{/if}

<script>
	import { selected_emoji } from '@/utils/store'
</script>
