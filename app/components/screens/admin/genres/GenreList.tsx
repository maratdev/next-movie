import { useGenres } from './useGenres'
import { FC } from 'react'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const GenreList: FC = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useGenres()

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />
			<AdminHeader
				onClick={createAsync}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<AdminTable
				isLoading={isLoading}
				tableItems={data || []}
				headerItems={['Name', 'Slug']}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default GenreList
