import { ChangeEvent, FC } from 'react';
import styles from './AdminHeader.module.scss';
import SearchField from '@/ui/search-field/SearchField';
import AdminCreateButton from '@/ui/admin-table/AdminCreateButton/AdminCreateButton';

interface IAdminHeader {
	onClick?: () => void;
	searchTerm: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AdminHeader: FC<IAdminHeader> = ({ onClick, handleSearch, searchTerm }) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleChange={handleSearch} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	);
};

export default AdminHeader;
