const url = new URL('https://api.bing.microsoft.com/v7.0/news/search')

url.searchParams.set('q', 'shohei ohtani')

export default async function() {
	const news = await fetch(url.toString(), {
		headers: {
			'Ocp-Apim-Subscription-Key': import.meta.env.VITE_NEWS_SEARCH_KEY,
		}
	})
	.then(res => res.json())
	.then(({ value }) => value)

	return {
		news
	}
}
