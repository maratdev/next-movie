import { FC } from 'react';
import PopularMovies from './PopularMovies/PopularMovies';
import dynamic from 'next/dynamic';

const DynamicFavoriteMovieList = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{
		ssr: false,
	}
)
const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavoriteMovieList />
		</div>
	);
};

export default MoviesContainer;
