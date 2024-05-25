import { GetStaticProps, NextPage } from 'next';
import Home from '@/screens/home/Home';
import { IHome } from '@/screens/home/home.types';
import { ISlide } from '@/ui/slider/slider.types';
import { getDirectorUrl, getMovieUrl } from '@/config/url.config';
import { getGenresList } from '@/utils/movie/getGenresList';
import { MovieService } from '@/services/movie.service';
import { DirectorService } from '@/services/director/directorService';
import { IGalleryItem } from '@/ui/galery/gallery.types';


const HomePage: NextPage<IHome> = (props) => <Home {...props} />;

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getMovies()
		const { data: dataDirectors } = await DirectorService.getAll()
		const dataTrendingMovies = await MovieService.getMostPopularMovies()
		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const directors: IGalleryItem[] = dataDirectors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			url: getDirectorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				url: getMovieUrl(m.slug),
			}))

		return {
			props: {
				directors,
				slides,
				trendingMovies,
			} as IHome,
			revalidate: 30,
		}
	} catch (error) {


		return {
			props: {
				directors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage;
