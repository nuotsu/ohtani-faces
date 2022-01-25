import { writable } from 'svelte/store'

export const selectedEmoji = writable<Emoji | false>(false)

export const selectedSticker= writable<Sticker | false>(false)
