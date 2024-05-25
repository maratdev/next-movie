import { FC } from 'react'

import Catalog from '../../ui/catalog-movies/Catalog'

import { IDirectorPage } from './director.types'

const Director: FC<IDirectorPage> = ({ director, movies }) => {
	return <Catalog movies={movies} title={director.name} />
}

export default Director
