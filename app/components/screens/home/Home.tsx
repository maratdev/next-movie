import React, { FC } from 'react';
import Heading from '@/ui/heading/Heading';
import styles from './home.module.scss';
import Meta from '@/utils/meta/Meta';

const Home: FC = () => {
	return (
		<Meta
			title='Watch movies online'
			description='Watch MovieApp movies and TV shows online or stream right to your browser.'
			keywords='movie,tv,watch,online'
		>
			<section className={styles.center}>
				<Heading title='Watch movies online' className='text-gray-300 mb-8 text-xl' />
			</section>

		</Meta>
	);
};
export default Home;
