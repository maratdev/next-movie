import React, { FC } from 'react';
import Heading from '@/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';

const Home: FC = () => {
	return (
		<Meta
			title='Watch movies online'
			description='Watch MovieApp movies and TV shows online or stream right to your browser.'
			keywords='movie,tv,watch,online'
		>
			<Heading title='Watch movies online' className='text-gray-300 mb-8 text-xl' />
		</Meta>
	);
};
export default Home;
