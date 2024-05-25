export const getMovieUrl = (slug: string) => `/movie/${slug}`;
export const getGenreUrl = (slug: string) => `/genre/${slug}`;
export const getDirectorUrl = (slug: string) => `/director/${slug}`;

export const getAdminUrl = (url: string) => `/manage/${url}`;
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1);
