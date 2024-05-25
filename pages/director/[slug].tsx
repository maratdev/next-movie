import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Director from '@/screens/director/Director'

import { IDirectorPage } from '@/screens/director/director.types'

import { DirectorService } from '@/services/director/directorService'
import { MovieService } from '@/services/movie/movie.service'

import Error404 from '../404'

const DirectorPage: NextPage<IDirectorPage> = ({ director, movies }) => {
	return director ? <Director director={director} movies={movies} /> : <Error404 />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: directors } = await DirectorService.getAll()

		const paths = directors.map((g) => ({
			params: { slug: g.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: director } = await DirectorService.getBySlug(String(params?.slug))
		const { data: movies } = await MovieService.getByDirector(director._id)
		return {
			props: { movies, director },
			revalidate: 30,
		}
	} catch (e) {
		return {
			props: {},
		}
	}
}

export default DirectorPage
