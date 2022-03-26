import client from '~/utils/sanity'
import runes from 'runes'

export default async function() {
	const { emojis, ...data } = await client.fetch(`
		{
			'site': *[_type == 'site'][0],

			'player': *[_type == 'player'][0],

			'stickers': *[_type == 'sticker']|order(date desc) {
				_id,
				image {
					face,
					original,
					'originalUrl': original.asset->url,
					source
				},
				emojis,
				date
			},

			'emojis': *[_type == 'sticker']|order(date desc).emojis,
		}
	`)

	return {
		...data,
		emojis: [...new Set(runes(emojis.join('')))]
	}
}
