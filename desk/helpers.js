import S from '@sanity/desk-tool/structure-builder'
import { IoDocumentSharp } from 'react-icons/io5'

export const singleton = (title, id, icon = IoDocumentSharp) => S.listItem()
	.title(title)
	.icon(icon)
	.child(
		S.editor()
			.schemaType(id)
			.documentId(id)
	)

export const list = (title, id, icon) => S.documentTypeListItem(id)
	.title(title)
	.icon(icon)

export const group = (title, list, icon) => S.listItem()
	.title(title)
	.icon(icon)
	.child(
		S.list()
			.title(title)
			.items(list)
	)
