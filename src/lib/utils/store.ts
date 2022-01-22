import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export const selectedEmoji: Writable<false | Emoji> = writable(false)
