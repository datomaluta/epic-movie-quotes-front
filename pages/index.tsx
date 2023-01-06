import { Footer, LandingNavBar, MoviePoster } from 'components';

export default function Home() {
  return (
    <div>
      <LandingNavBar />
      <div className='text-center h-[50.5rem] bg-gradient-to-t from-gradient-dark via-gradient-almost-black to-black  flex flex-col items-center justify-center'>
        <h1 className='text-dark-yellow text-6xl font-montserrat font-bold leading-[5.625rem] mb-6'>
          Find any quote in <br /> millions of movie lines
        </h1>
        <button className='bg-dark-red text-white font-helvetica-eng px-4 py-2 rounded-[0.3rem] text-xl'>
          Get Started
        </button>
      </div>

      <MoviePoster background='interstellar' position='30' />
      <MoviePoster background='manAndWoman' position='40' />
      <MoviePoster background='lotr' position='55' />

      <Footer />
    </div>
  );
}
