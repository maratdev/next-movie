import { useDirectors } from './useDirectors';
import { FC } from 'react';

import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/components/ui/admin-table/AdminTable/AdminTable';

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Heading from '@/ui/heading/Heading';

import Meta from '@/utils/meta/Meta';

const DirectorList: FC = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useDirectors();

	return (
		<Meta title='Directors'>
			<AdminNavigation />
			<Heading title='Directors' />
			<AdminHeader
				onClick={createAsync}
				handleSearch={handleSearch}
				searchTerm={searchTerm}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['Name', 'Count movies']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	);
};

export default DirectorList;
