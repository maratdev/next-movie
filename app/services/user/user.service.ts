import axios from 'api/interceptors'

import { IProfileInput } from '@/screens/profile/profile.interface'

import { IMovie } from '@/shared/types/movie.types'
import { IUser } from '@/shared/types/user.types'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	async getProfile() {
		return axios.get<IUser>(getUsersUrl('/profile'))
	},

	async updateProfile(data: IProfileInput) {
		return axios.patch<string>(getUsersUrl('/'), data)
	},

	async getUsers(search?: string) {
		return axios.get<IUser[]>(getUsersUrl(``), {
			params: search
				? {
					search,
				}
				: {},
		})
	},

	async getUser(_id: string) {
		return axios.get<IUser>(getUsersUrl(`/${_id}`))
	},

	async updateUser(_id: string, data: IProfileInput) {
		return axios.patch<string>(getUsersUrl(`/${_id}`), data)
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},

	async getFavorites() {
		return axios.get<IMovie[]>(getUsersUrl('/profile/favorites'))
	},

	async toggleFavorite(movieId: string) {
		return axios.post(getUsersUrl('/profile/favorites'), {
			movieId,
		})
	},
}
