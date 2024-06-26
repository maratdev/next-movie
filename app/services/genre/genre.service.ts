import axios, { axiosClassic } from 'api/interceptors'

import { IGenreEditInput } from '@/screens/admin/genre/genre-edit.interface'

import { ICollection } from '@/components/screens/collections/collections.types'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/slug/${slug}`))
	},

	async create() {
		return axios.post<string>(getGenresUrl(''))
	},

	async update(_id: string, data: IGenreEditInput) {
		return axios.patch<string>(getGenresUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},

	async getAll(search?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: search
				? {
						search,
				  }
				: {},
		})
	},

	async getCollections() {
		return axiosClassic.get<ICollection[]>(getGenresUrl('/collection'))
	},

	async getById(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},

	async getPopularGenres(limit: number = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(`/popular`), {
			params: {
				limit,
			},
		})
	},
}
