import { FC } from 'react';
import { IMovie } from '@/shared/types/movie.types';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SearchList.module.scss';
const SearchList: FC<{ movies: IMovie[] | undefined}> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies?.length ? (
				movies?.map((movie: IMovie) => (
					<Link key={movie._id} href={`/movie/${movie.slug}`}>
						<Image
							src={movie.poster || ''}
							width={50}
							height={50}
							objectFit='cover'
							objectPosition='top'
							alt={movie.title}
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className='text-white text-center my-4'>Movies not found!</div>
			)}
		</div>
	);
};

export default SearchList;
