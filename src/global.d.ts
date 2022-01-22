/// <reference types="@sveltejs/kit" />

// Sticker

interface Sticker {
	_id: string
	image: StickerImage
	emotion: StickerEmoji
	meta?: StickerMeta
}

interface StickerImage {
	face: string
	original: string
	originalUrl: string
	source: string
	embed: string
}

interface StickerEmoji {
	emoji: string
}

interface StickerMeta {
	date?: string
	description?: string
}

// Emoji

type Emoji = string
