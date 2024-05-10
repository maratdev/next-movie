import { FC } from 'react';
import style from '../Menu.module.scss';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { IMenuItem } from '@/components/layout/Navigation/MenuConatiner/menu.interface';
import Link from 'next/link';
import MaterialIcon from '@/ui/MaterialIcon';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const asPath = usePathname();
	return (
		<li className={cn({ [style.active]: asPath === item.link })}>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	);
};

export default MenuItem;
