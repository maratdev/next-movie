import { ICollection } from './collections.types'
import Image from 'next/image'
import { FC } from 'react'

const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return <Image alt={title} src={image} priority fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" draggable={false} />
}

export default CollectionImage
