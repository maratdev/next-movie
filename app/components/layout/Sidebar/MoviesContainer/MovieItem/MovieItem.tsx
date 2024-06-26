import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

import { getGenresListEach } from '@/utils/movie/getGenresList'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'
import styles from './MovieItem.module.scss'
import { IWidgetMovie } from '../MovieList/movie-list.interface';

const MovieItem: FC<{ movie: IWidgetMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
					<Image
						alt={movie.title}
						width={65}
						height={97}
						src={movie.poster}
						draggable={false}
						priority
					/>
			</Link>
			<div className={styles.info}>
				<div>
					<h3 className={styles.title}>{movie.title}</h3>
						{movie.genres?.map(({ slug, name, _id }, idx) => (
							<Link className={styles.genres} key={_id} href={getGenreUrl(slug)}>
							{getGenresListEach(idx, movie.genres.length, name)}
							</Link>
						))}
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{Number(movie.rating).toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
