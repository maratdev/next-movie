import { FC } from 'react';
import styles from './MovieItem.module.scss';
import { IMovie } from '@/shared/types/movie.types';
import Link from 'next/link';
import Image from 'next/image';
import { getMoviesUrl } from '@/config/api.config';
import { getGenreUrl } from '@/config/url.config';
import { getGenresListEach } from '@/utils/movie/getGenresList';
import MaterialIcon from '@/ui/MaterialIcon';

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMoviesUrl(movie.slug)}>
				<Image
					width={65}
					height={97}
					draggable={false}
					src={movie.poster}
					alt={movie.title}
					priority>
				</Image>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((genre, idx) =>
						<Link
							key={genre._id}
							href={getGenreUrl(genre.slug)}
						>
							{getGenresListEach(idx, movie.genres.length, genre.name)}
						</Link>)}
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	);
};

export default MovieItem;
