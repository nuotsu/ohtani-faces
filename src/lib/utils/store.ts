import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export const selectedEmoji: Writable<Emoji | false> = writable(false)

export const selectedSticker: Writable<Sticker | false> = writable(false)
