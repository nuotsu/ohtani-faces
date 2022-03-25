import { BiSticker } from 'react-icons/bi'

export default {
	name: 'sticker',
	title: 'Sticker',
	icon: BiSticker,
	type: 'document',
	fields: [
		{
			name: 'image',
			type: 'object',
			options: { collapsible: true, collapsed: false, columns: 2 },
			fields: [
				{ name: 'face', type: 'image' },
				{ name: 'original', type: 'image' },
				{ name: 'source', type: 'url' }
			]
		},
		{ name: 'emojis', type: 'string' },
		{ name: 'date', type: 'date' }
	],
	preview: {
		select: {
			title: 'emojis',
			subtitle: 'date',
			media: 'image.face'
		}
	},
	orderings: [
		{
			title: 'Date',
			name: 'dateDesc',
			by: [{ field: 'date', direction: 'desc' }]
		},
		{
			title: 'Emoji',
			name: 'emojiAsc',
			by: [{ field: 'emojis', direction: 'asc' }]
		}
	]
}
