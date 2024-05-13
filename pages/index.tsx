import { GetStaticProps, NextPage } from 'next';
import Home from '@/screens/home/Home';
import { IHome } from '@/screens/home/home.types';
import { ISlide } from '@/ui/slider/slider.types';
import { getActorUrl, getMovieUrl } from '@/config/url.config';
import { getGenresList } from '@/utils/movie/getGenresList';
import { MovieService } from '@/services/movie.service';
import { ActorService } from '@/services/actor/actor.service';
import { IGalleryItem } from '@/ui/galery/gallery.types';


const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies}) => <Home slides={slides} actors={actors} trendingMovies={trendingMovies} />;

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getMovies()
		const { data: dataActors } = await ActorService.getAll()
		const dataTrendingMovies = await MovieService.getMostPopularMovies()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			url: getActorUrl(a.slug),
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
				actors,
				slides,
				trendingMovies,
			} as IHome,
		}
	} catch (error) {


		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage;
