export const errorCatch = (error: any): string => {
	if (typeof error.response.data.message === 'object') {
		return error.response
			? error.response.data.message[0]
			: error.message;
	} else {
		return error.response
			? error.response.data.message
			: error.message;
	}
}

export const getContentType = () => ({
	'Content-Type': 'application/json',
})
