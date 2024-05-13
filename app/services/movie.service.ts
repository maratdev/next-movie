import { axiosClassic } from 'api/interceptors';

import { IMovie } from '@/shared/types/movie.types';

import { getMoviesUrl } from '@/config/api.config';

export const MovieService = {

	async getMovies(search?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: search
				? {
					search,
				}
				: {},
		});
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie>(
			getMoviesUrl('/popular')
		)

		return movies
	},

};
