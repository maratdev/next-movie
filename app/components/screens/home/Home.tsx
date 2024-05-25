import React, { FC } from 'react';
import Heading from '@/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { IHome } from '@/screens/home/home.types';
import Slider from '@/ui/slider/Slider';
import Gallery from '@/ui/galery/Gallery';
import SubHeading from '@/ui/heading/SubHeading';

const Home: FC<IHome> = ({slides, directors, trendingMovies}) => {
	return (
		<Meta
			title='Watch anime online'
			description='Watch MovieApp movies and TV shows online or stream right to your browser.'
			keywords='movie,tv,watch,online'
		>
			<Heading title='Watch anime online' className='text-gray-300 mb-8 text-xl' />
			{slides?.length > 0 && <Slider slides={slides} />}
			<div className="my-10">
				<SubHeading title="Trending now" />
				{trendingMovies?.length > 0 && <Gallery items={trendingMovies} />}
			</div>
			<div>
				<SubHeading title="Best Directors" />
				{directors?.length > 0 && <Gallery items={directors} />}
			</div>
		</Meta>
	);
};
export default Home;
