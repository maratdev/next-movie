import { IMovie } from '@/shared/types/movie.types'

export interface IMovieEditInput
	extends Omit<IMovie, '_id' | 'rating' | 'countOpened' | 'genres' | 'directors'> {
	genres: string[]
	directors: string[]
}
