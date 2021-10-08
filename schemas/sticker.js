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
			],
		},
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
					description: '1 to 5',
					initialValue: 3,
					validation: Rule => [
						Rule.required()
						.min(1)
						.max(5)
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
			media: 'image.face',
		},
		prepare({ emotion, meta, ...selection }) {
			const level = new Array(emotion.level).fill`★`.join``

			return {
				title: `${emotion.emoji || '😶'} ${level}`,
				subtitle: [meta?.date, meta?.description].filter(Boolean).join` — `,
				...selection,
			};
		},
	},
}
