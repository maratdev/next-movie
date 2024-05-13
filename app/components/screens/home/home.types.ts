
import { ISlide } from '@/ui/slider/slider.types'

import { IMovie } from '@/shared/types/movie.types'
import { IGalleryItem } from '@/ui/galery/gallery.types';

export interface ISlideMovie
	extends Pick<IMovie, '_id' | 'bigPoster' | 'title' | 'genres' | 'slug'> {}

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}
