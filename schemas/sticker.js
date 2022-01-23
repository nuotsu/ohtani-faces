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
			options: { collapsible: true, collapsed: false, columns: 2, },
			fields: [
				{ name: 'face', type: 'image', },
				{ name: 'original', type: 'image', },
				{ name: 'source', type: 'url', },
				{ name: 'embed', type: 'text', rows: 2, },
			],
		},
		{
			name: 'emotion',
			type: 'object',
			options: { collapsible: true, collapsed: false, columns: 2, },
			fields: [
				{
					name: 'emoji',
					title: 'Emojis',
					type: 'string',
				},
			],
		},
		{
			name: 'meta',
			title: 'Meta data',
			type: 'object',
			options: { collapsible: true, collapsed: false, columns: 2, },
			fields: [
				{ name: 'date', type: 'date', },
				{ name: 'description', type: 'text', rows: 6 },
			],
		},
	],
	preview: {
		select: {
			emotion: 'emotion',
			meta: 'meta',
			media: 'image.face',
		},
		prepare({ emotion, meta, ...selection }) {
			return {
				title: emotion.emoji || '😶',
				subtitle: [meta?.date, meta?.description].filter(Boolean).join` — `,
				...selection,
			};
		},
	},
	orderings: [
		{
			title: 'Date',
			name: 'dateDesc',
			by: [{ field: 'meta.date', direction: 'desc' }]
		},
		{
			title: 'Emoji',
			name: 'emojiAsc',
			by: [{ field: 'emotion.emoji', direction: 'asc' }]
		},
	]
}
