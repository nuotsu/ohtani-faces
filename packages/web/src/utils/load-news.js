export default async function() {
	const news = await fetch(`https://newsapi.org/v2/everything?q=${ 'shohei' }&searchIn=title&apiKey=${ import.meta.env.VITE_NEWS_API_KEY }`)
		.then(res => res.json())
		.then(({ articles }) => articles.slice(0, 10))

	return {
		news
	}
}
