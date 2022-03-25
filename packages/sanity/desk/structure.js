import S from '@sanity/desk-tool/structure-builder'
import { singleton, list } from './helpers'
import { IoMdSettings } from 'react-icons/io'
import { BiSticker } from 'react-icons/bi'

const AllDocuments = S.documentTypeListItems()
	.filter(item => ![
		'site',
		'sticker',
	].includes(item.getId()))

export default () => S.list()
	.title('Content')
	.items([
		singleton('Site settings', 'site').icon(IoMdSettings),

		list('Stickers', 'sticker').icon(BiSticker),

		...AllDocuments,
	])
