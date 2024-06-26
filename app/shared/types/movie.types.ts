import { TypeMaterialIconName } from '@/shared/types/icons.types';

export interface IGenre {
	_id: number;
	name: string;
	slug: string;
	description: string;
	icon: TypeMaterialIconName;
}

export interface IParameters {
	year: number
	duration: number
	country: string
}


export interface IDirector {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters: IParameters
	genres: IGenre[]
	directors: IDirector[]
	countOpened: number
	videoUrl: string
	rating: string
	slug: string
}
