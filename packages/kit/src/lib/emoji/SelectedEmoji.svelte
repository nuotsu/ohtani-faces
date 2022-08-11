{#if !!$selected_emoji}
	{#key $selected_emoji}
		<button
			class="group anim-fade-r"
			on:click={() => $selected_emoji = null}
		>
			<span class="inline-block transition-transform group-hover:scale-125">&times;</span>
			{$selected_emoji}
		</button>
	{/key}
{/if}

<script>
	import { selected_emoji } from '@/utils/store'
</script>
