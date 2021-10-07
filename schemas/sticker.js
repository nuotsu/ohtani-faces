import { BiSticker } from 'react-icons/bi'

export default {
	name: 'sticker',
	title: 'Sticker',
	icon: BiSticker,
	type: 'document',
	fields: [
		{ name: 'image', type: 'image', },
		{
			name: 'emotion',
			type: 'object',
			options: { collapsible: true, collapsed: false, columns: 2, },
			fields: [
				{
					name: 'emoji',
					type: 'string',
					description: 'Emoji only',
				},
				{
					name: 'level',
					type: 'number',
					description: '1 to 10',
					initialValue: 5,
					validation: Rule => [
						Rule.required()
						.min(1)
						.max(10)
					]
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
				{ name: 'description', type: 'text', rows: 3 },
			],
		},
	],
	preview: {
		select: {
			emotion: 'emotion',
			meta: 'meta',
			media: 'image',
		},
		prepare({ emotion, meta, ...selection }) {
			return {
				title: `${emotion.emoji} — lv. ${emotion.level}`,
				subtitle: [meta.date, meta.description].filter(Boolean).join` — `,
				...selection,
			};
		},
	},
}
