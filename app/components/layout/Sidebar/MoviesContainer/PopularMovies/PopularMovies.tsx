import { FC } from 'react';
import { useQuery } from 'react-query';
import { MovieService } from '@/services/movie.service';
import SkeletonLoader from '@/ui/skeleton/SkeletonLoader';
import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList/MovieList';

const PopularMovies: FC = () => {
	const {
		isLoading, data: popularMovies,
	} = useQuery('Most popular movie in sidebar', () => MovieService.getMostPopularMovies(), {
		select: (data) => data,
	});
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			list={{
				link: '/trending',
				movies: popularMovies || [],
				title: 'Popular movies',
			}}
		/>
	)
};

export default PopularMovies;
