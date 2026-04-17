const normalizeBaseUrl = (value?: string) => {
	const base = (value || '').replace(/\/+$/, '')
	return base.replace(/\/api$/i, '')
}

export const API_URL = `${normalizeBaseUrl(process.env.APP_URL)}/api`;
export const API_SERVER_URL = `${normalizeBaseUrl(process.env.APP_SERVER_URL)}/api`;

export const getGenresUrl = (string: string) => `/genre${string}`;
export const getAuthUrl = (string: string) => `/auth${string}`;
export const getUsersUrl = (string: string) => `/user${string}`;
export const getMoviesUrl = (string: string) => `/movie${string}`;
export const getDirectorsUrl = (string: string) => `/director${string}`;
export const getRatingsUrl = (string: string) => `/rating${string}`;
