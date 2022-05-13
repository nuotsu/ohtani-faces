import { browser } from '$app/env'

const dev = process.env.NODE_ENV === 'development'

const url = new URL('https://api.thenewsapi.com/v1/news/all')

const params = {
	api_token: import.meta.env.VITE_NEWS_SEARCH_KEY,
	categories: 'sports',
	search: 'shohei ohtani',
}

for (const [key, value] of Object.entries(params)) {
	url.searchParams.append(key, value)
}

function getTime(date) {
	return new Date(date).getTime()
}

async function fetchNews() {
	const news = await fetch(url.toString())
		.then(res => res.json())
		.then(res => res.data?.sort((a, b) => getTime(b.published_at) - getTime(a.published_at)))

	window.localStorage.setItem('news', JSON.stringify(news))

	return news
}

export default async () => {
	if (!browser || dev) return null

	const cached = window.localStorage.getItem('news')

	let news = !!cached
		? JSON.parse(cached)
		: await fetchNews()

	return { news }
}
