import { useQuery } from 'react-query';
import { GenreService } from '@/services/genre.service';
import { IMenuItem } from '@/components/layout/Navigation/MenuConatiner/menu.interface';
import { getGenreUrl } from '@/config/url.config';

export const usePopularGenres = () => {
	return useQuery('popular genre menu', () => GenreService.getAll(), {
		select: ({ data }) =>
			data.filter(genre => genre.icon)
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						}) as IMenuItem,
				)
				.splice(0, 4),
	});
};
