{#if !!sticker}
	{#key sticker._id}
		<aside class="sticky bottom-4 z-10 mt-4 anim-fade-r md:hidden">
			<a class="action border-l-0 rounded-l-none text-sm" href="#selected-sticker">
				☝️ View selected sticker
			</a>
		</aside>
	{/key}
{/if}

<script>
	import { selected_sticker } from '@/utils/store'

	$: sticker = $selected_sticker
</script>
