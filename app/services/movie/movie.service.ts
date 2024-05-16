import axios, { axiosClassic } from 'api/interceptors'

import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.interface'

import { IMovie } from '@/shared/types/movie.types'

import { getMoviesUrl } from '@/config/api.config'

export const MovieService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`/slug/${slug}`))
	},

	async getByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/actor/${actorId}`))
	},

	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl(`/genre`), {
			genreIds,
		})
	},

	async create() {
		return axios.post<string>(getMoviesUrl(''))
	},

	async updateCountOpened(slug: string) {
		return axiosClassic.post(getMoviesUrl('/update'), {
			slug,
		})
	},

	async update(_id: string, data: IMovieEditInput) {
		return axios.patch<string>(getMoviesUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},

	async getMovies(search?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: search
				? {
						search,
				  }
				: {},
		})
	},

	async getById(_id: string) {
		return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/popular')
		)

		return movies
	},
}
