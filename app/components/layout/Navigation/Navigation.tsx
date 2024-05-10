import style from './navigation.module.scss';
import { FC } from 'react';
import Logo from '@/components/layout/Navigation/Logo';
import MenuContainer from '@/components/layout/Navigation/MenuConatiner/MenuContainer';

const Navigation: FC = () => {
	return (
		<section className={style.navigation}>
			<Logo />
			<MenuContainer />
		</section>
	);
};

export default Navigation;
