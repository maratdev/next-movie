import { getGenresUrl } from '@/config/api.config';
import { IGenre } from '@/shared/types/movie.types';
import { axiosClassic } from '../api/interceptors';

export const GenreService = {
	async getAll(search?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: search
				? {
					search,
				}
				: {},
		});
	},
};
