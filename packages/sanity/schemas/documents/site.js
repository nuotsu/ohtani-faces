export default {
	name: 'site',
	title: 'Site',
	type: 'document',
	__experimental_actions: ['update', 'publish'],
	fields: [
		{
			name: 'title',
			type: 'object',
			fields: [
				{ name: 'short', type: 'string', },
				{ name: 'full', type: 'string', },
			]
		},
		{
			name: 'description',
			type: 'text',
			rows: 3,
			validation: Rule => Rule.max(160).warning('Max length 160 characters'),
		},
		{
			name: 'seoImage',
			title: 'SEO image',
			type: 'image',
		},
	],
	preview: {
		select: {
			title: 'title.full',
		},
	},
}
