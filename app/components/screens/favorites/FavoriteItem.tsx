import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './Favorites.module.scss'
import { IFavoriteItem } from './favorites.interface'

const FavoriteItem: FC<{ item: IFavoriteItem }> = ({ item }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={item._id} />
			<Link className={styles.item} href={item.url}>
					<Image
						alt={item.name}
						src={item.posterPath}
						layout="fill"
						draggable={false}
						priority
					/>
					<div className={styles.title}>{item.title}</div>
			</Link>
		</div>
	)
}

export default FavoriteItem
