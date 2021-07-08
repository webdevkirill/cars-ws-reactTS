export const dateFormat = (date: number) => {
	const dateString = new Date(date);
	return new Intl.DateTimeFormat('ru', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	}).format(dateString);
};
