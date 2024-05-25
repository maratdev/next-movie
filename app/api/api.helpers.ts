export const errorCatch = (error: any): string => {
	if (error.response.data && error.response) {
		return typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message;
	} else {
		return error.message;
	}
}

export const getContentType = () => ({
	'Content-Type': 'application/json',
})
