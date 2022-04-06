<Header/>
<EmojiList/>
<SelectedEmoji/>
<StickerList/>

<div class="max-w-screen-xl mx-auto lg:grid lg:grid-cols-2 gap-4 px-4 my-8">
	<PlayerInfo/>
	<PlayerNews/>
</div>

<Ad/>
<Footer/>
<Details/>

<style>
	div > :global(* + *) {
		@apply <lg:mt-4;
	}
</style>

<script>
	import Header from '~/lib/header/Header.svelte'
	import EmojiList from '~/lib/emoji/EmojiList.svelte'
	import SelectedEmoji from '~/lib/emoji/SelectedEmoji.svelte'
	import StickerList from '~/lib/sticker/StickerList.svelte'
	import Ad from '~/lib/Ad.svelte'
	import PlayerInfo from '~/lib/player-info/PlayerInfo.svelte'
	import PlayerNews from '~/lib/player-news/PlayerNews.svelte'
	import Footer from '~/lib/Footer.svelte'
	import Details from '~/lib/details/Details.svelte'
</script>
