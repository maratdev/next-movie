import axios, { axiosClassic } from 'api/interceptors'

import { IDirectorEditInput } from '@/screens/admin/director/director-edit.interface'

import { IDirector } from '@/shared/types/movie.types'

import { getDirectorsUrl } from '@/config/api.config'

export const DirectorService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IDirector>(getDirectorsUrl(`/slug/${slug}`))
	},

	async create() {
		return axios.post<string>(getDirectorsUrl(''))
	},

	async update(_id: string, data: IDirectorEditInput) {
		return axios.patch<string>(getDirectorsUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<string>(getDirectorsUrl(`/${_id}`))
	},

	async getAll(search?: string) {
		return axiosClassic.get<IDirector[]>(getDirectorsUrl(``), {
			params: search
				? {
						search,
				  }
				: {},
		})
	},

	async getById(_id: string) {
		return axios.get<IDirectorEditInput>(getDirectorsUrl(`/${_id}`))
	},
}
