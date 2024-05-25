import { IDirector, IMovie } from '@/shared/types/movie.types'

export interface IDirectorPage {
	director: IDirector
	movies: IMovie[]
}
