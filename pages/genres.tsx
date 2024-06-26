import { GetStaticProps, NextPage } from 'next'

import Collections from '@/screens/collections/Collections'
import { ICollection } from '@/screens/collections/collections.types'

import { GenreService } from '@/services/genre/genre.service'
import { errorCatch } from '../app/api/api.helpers';

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return <Collections collections={collections || []} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		return {
			props: { collections },
			revalidate: 30,
		}
	} catch (e) {
		errorCatch(e)

		return {
			props: {},
			// notFound: true,
		}
	}
}

export default GenresPage
