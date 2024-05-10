import { FC } from 'react';
import { usePopularGenres } from '@/components/layout/Navigation/MenuConatiner/genres/usePopularGenres';
import Menu from '@/components/layout/Navigation/MenuConatiner/Menu/Menu';
import SkeletonLoader from '@/ui/skeleton/SkeletonLoader';

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres();
	return isLoading ? (
		<div className='mx-11 mb-6'><SkeletonLoader count={4} className='h-7 mt-7' /></div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	);
};

export default GenreMenu;
