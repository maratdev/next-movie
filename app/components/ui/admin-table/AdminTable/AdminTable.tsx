import { FC } from 'react';


import styles from './AdminTable.module.scss';
import AdminTableHeader from './AdminTableHeader';
import AdminTableItem from './AdminTableItem';
import { ITableItem } from './admin-table.interface';
import SkeletonLoader from '@/ui/skeleton/SkeletonLoader';

interface IAdminTable {
	tableItems: ITableItem[];
	headerItems: string[];
	isLoading: boolean;
	removeHandler: (id: string) => void;
}

const AdminTable: FC<IAdminTable> = ({ tableItems, headerItems, isLoading, removeHandler,}) => {
	if (tableItems.length) {
		return (
			<div>
				<AdminTableHeader headerItems={headerItems} />

				{isLoading ? (
					<SkeletonLoader count={1} height={48} className='mt-4' />
				) : tableItems.map((tableItem) => (
					<AdminTableItem
						key={tableItem._id}
						tableItem={tableItem}
						removeHandler={removeHandler}
					/>
				))}
			</div>
		);
	} else {
		return (
			<div>
				<AdminTableHeader headerItems={headerItems} />

				{isLoading ? (
					<SkeletonLoader count={1} height={48} className='mt-4' />
				) : <div className={styles.notFound}>Elements not found</div>}
			</div>
		);
	}
};

export default AdminTable;
