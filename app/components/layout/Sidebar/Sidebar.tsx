import { FC } from 'react';
import styles from './sidebar.module.scss';
import Search from '@/components/layout/Sidebar/Search/Search';
import MoviesContainer from '@/components/layout/Sidebar/MoviesContainer/MoviesContainer';

const Sidebar: FC = () => {
	return (
		<section className={styles.sidebar}>
			<Search/>
			<MoviesContainer/>
		</section>
	);
};

export default Sidebar;
