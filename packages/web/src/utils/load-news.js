const url = new URL('https://api.thenewsapi.com/v1/news/all?')

url.searchParams.set('api_token', import.meta.env.VITE_NEWS_SEARCH_KEY)
url.searchParams.set('categories', 'sports')
url.searchParams.set('search', 'shohei ohtani')

function getTime(date) {
	return new Date(date).getTime()
}

const dev = process.env.NODE_ENV === 'development'

export default async function() {
	if (dev) return null

	const news = await fetch(url.toString())
		.then(res => res.json())
		.then(res => res.data?.sort((a, b) => getTime(b.published_at) - getTime(a.published_at)))

	return {
		news
	}
}
