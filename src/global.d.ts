/// <reference types="@sveltejs/kit" />

// Sticker

type Sticker = {
	_id: string
	image: StickerImage
	emotion: StickerEmoji
	meta?: StickerMeta
}

type StickerImage = {
	face: string
	original: string
	originalUrl: string
	source: string
	embed: string
}

type StickerEmoji = {
	emoji: string
}

type StickerMeta = {
	date?: string
	description?: string
}

// Emoji

type Emoji = string

// stuff

type Stuff = {
	stickers?: Sticker[]
	emojis?: Emoji[]
}
