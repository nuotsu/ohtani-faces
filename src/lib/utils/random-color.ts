const colors: string[] = [
	'red',
	'orange',
	'amber',
	'yellow',
	'lime',
	'green',
	'emerald',
	'teal',
	'cyan',
	'blue',
	'indigo',
	'violet',
	'purple',
	'fuchsia',
	'pink',
	'rose'
]

const random = (): string => colors[Math.floor(Math.random() * colors.length)]

export default random
