import { FC } from 'react';
import { IMenu } from '@/components/layout/Navigation/MenuConatiner/menu.interface';
import styles from './Menu.module.scss';
import MenuItem from '@/components/layout/Navigation/MenuConatiner/Menu/MenuItem/MenuItem';
import AuthItems from '@/components/layout/Navigation/MenuConatiner/auth/AuthItems';

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.list}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' ? <AuthItems /> : ''}
			</ul>
		</div>
	);
};

export default Menu;
