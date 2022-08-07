const { format } = new Intl.DateTimeFormat('en-US', {
	day: 'numeric',
	month: 'short',
	year: 'numeric',
})

export default date => format(new Date(date.split('-')))
