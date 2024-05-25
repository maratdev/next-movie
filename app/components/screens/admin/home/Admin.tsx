import { FC } from 'react';
import Meta from '@/utils/meta/Meta';
import Statistics from '@/screens/admin/home/Statistics/Statistics';
import Heading from '@/ui/heading/Heading';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';

const Admin: FC = () => {
	return <Meta title='Admi Panel' description='Admin Panel'>
		<AdminNavigation/>
		<Heading title='Some Statistics'></Heading>
		<Statistics/>
	</Meta>
};

export default Admin;
