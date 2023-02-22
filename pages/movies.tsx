import {
  AddMovieModal,
  AddPlusIcon,
  Header,
  MovieCard,
  SearchIcon,
  Sidebar,
} from 'components'
import { useMovie } from 'hooks'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Movies = () => {
  const { userQuery, addingMovie, addingMovieHandler, } =
    useMovie()

  return (
    <div className='bg-news-feed min-h-screen text-white'>
      <Header />
      <div className='pt-[7.375rem] px-[4.313rem] xl:px-[2rem] sm:px-0 flex py-60 lg:flex-col'>
        <Sidebar />
        <div className='ml-[23rem] xl:ml-[22rem] w-full'>
          <div className='flex justify-between items-center mb-16'>
            <p className='text-2xl'>My list of movies (Total 25)</p>
            <div className='flex items-center gap-2'>
              <div className='relative'>
                <div className='absolute left-0 top-1/2 -translate-y-1/2'>
                  <SearchIcon />
                </div>
                <input
                  className='bg-transparent pl-10 placeholder:text-white text-xl w-[8rem]'
                  placeholder='Search'
                />
              </div>
              <button
                onClick={() => addingMovieHandler(true)}
                className='flex items-center bg-dark-red px-4 py-4 rounded text-xl gap-2'
              >
                <AddPlusIcon />
                <span>Add movie</span>
              </button>
            </div>
          </div>

          {addingMovie && <AddMovieModal/>}

          <div className='flex gap-4 gap-y-16 flex-wrap'>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'home',
        'common',
        'validations',
      ])),
      locale,
    },
  }
}

export default Movies
