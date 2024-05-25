import { IDirector } from '@/shared/types/movie.types'

export interface IDirectorEditInput extends Omit<IDirector, '_id' | 'countMovies'> {}
