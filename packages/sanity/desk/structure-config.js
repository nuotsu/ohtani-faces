import S from '@sanity/desk-tool/structure-builder'
import { singleton, list } from './helpers'
import { VscServerProcess, VscSmiley } from 'react-icons/vsc'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default () => S.list()
	.title('Content')
	.items([
		singleton('Site', 'site').icon(VscServerProcess),
		list('Stickers', 'sticker').icon(VscSmiley),
		singleton('Player info', 'player').icon(BsFillPersonLinesFill),
	])
