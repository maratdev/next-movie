import { GetStaticProps, NextPage } from 'next'
import { IMovie } from '@/shared/types/movie.types'
import { MovieService } from '@/services/movie/movie.service'
import Catalog from '@/ui/catalog-movies/Catalog';

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <Catalog
      movies={movies || []}
      title="Fresh movies"
      description="New movies and series in excellent quality: legal, safe, without ads"
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getMovies()
    return {
      props: { movies },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export default FreshPage
