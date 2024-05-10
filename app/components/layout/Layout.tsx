import styles from './layout.module.scss';
import { FC, ReactNode } from 'react';
import Navigation from '@/components/layout/Navigation/Navigation';
import Sidebar from '@/components/layout/Sidebar/Sidebar';

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<main className={styles.layout}>
			<Navigation />
			{children}
			<Sidebar />
		</main>
	);
};
export default Layout;
