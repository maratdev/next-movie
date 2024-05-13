import { FC } from 'react';
import styles from './MovieList.module.scss';
import { IMovieList } from '@/components/layout/Sidebar/MoviesContainer/MovieList/movie-list.interface';
import Link from 'next/link';
import MovieItem from '@/components/layout/Sidebar/MoviesContainer/MovieItem/MovieItem';

const MovieList: FC<{ list: IMovieList }> = ({ list: { link, movies, title } }) => {
	console.log(movies);
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>

			{movies?.map(movie => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link className={styles.button} href={link}>
				See more
			</Link>
		</div>
	);
};

export default MovieList;
