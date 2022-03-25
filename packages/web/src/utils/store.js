import { writable } from 'svelte/store'
import { browser } from '$app/env'

export const selectedEmoji = writable(false)

export const selectedSticker= writable(false)

export const favorites = writable(browser
	? JSON.parse(localStorage.getItem('favorites')) || []
	: []
)

export const favoritesFiltered = writable(false)
