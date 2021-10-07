import S from '@sanity/desk-tool/structure-builder'
import { list } from './helpers'
import { BiSticker } from 'react-icons/bi'

export default () => S.list()
	.title('Content')
	.items([
		list('Stickers', 'sticker', BiSticker)
	])
