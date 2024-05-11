export const API_URL = `${process.env.APP_URL}/`;

export const getGenresUrl = (string: string) => `/genre${string}`;
export const getAuthUrl = (string: string) => `auth${string}`;
export const getUsersUrl = (string: string) => `/user${string}`;
export const getMoviesUrl = (string: string) => `/movie${string}`;
export const getActorsUrl = (string: string) => `/actor${string}`;
export const getRatingsUrl = (string: string) => `/rating${string}`;
