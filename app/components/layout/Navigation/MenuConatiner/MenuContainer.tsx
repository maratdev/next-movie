import { FC } from 'react';
import Menu from '@/components/layout/Navigation/MenuConatiner/Menu/Menu';
import { firstMenu, userMenu } from '@/components/layout/Navigation/MenuConatiner/menu.data';
import GenreMenu from '@/components/layout/Navigation/MenuConatiner/genres/GenreMenu';

const MenuContainer: FC = () => {
	return (
		<div className='MenuContainer'>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	);
};

export default MenuContainer;
