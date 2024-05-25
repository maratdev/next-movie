import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';

const Logo: FC = () => {
	return (
		<Link className='px-layout mb-10 block' href='/'>
			<Image
				src={logo}
				alt='Logo Cinema'
				draggable={false}
				priority={true}
				width={220}
			/>
		</Link>
	);
};

export default Logo;
