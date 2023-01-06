import { Footer, LandingNavBar, MoviePoster } from 'components';

export default function Home() {
  return (
    <div>
      <LandingNavBar />
      <div className='text-center h-[50.5rem] sm:h-[27.125rem] bg-gradient-to-t from-gradient-dark via-gradient-almost-black to-black  flex flex-col items-center justify-center'>
        <h1 className='text-dark-yellow text-6xl sm:text-2xl font-montserrat font-bold leading-[5.625rem] mb-6 sm:mb-10'>
          Find any quote in <br /> millions of movie lines
        </h1>
        <button className='bg-dark-red text-white font-helvetica-eng px-4 py-2 rounded-[0.3rem] text-xl sm:text-base'>
          Get Started
        </button>
      </div>

      <MoviePoster
        background='interstellar'
        position='30'
        movie='Interstellar'
        year='2014'
      >
        “You have to leave something <br /> behind to go forward”
      </MoviePoster>

      <MoviePoster
        background='manAndWoman'
        position='55'
        movie='The Royal Tenenbaums'
        year='2001'
      >
        “I think we’re just gonna <br className='hidden sm:block' /> have
        <br className='sm:hidden' />
        to be secretly in love <br className='hidden sm:block' /> with each
        other <br className='sm:hidden' /> and
        <br className='hidden sm:block' /> leave it that”
      </MoviePoster>

      <MoviePoster
        background='lotr'
        position='55'
        movie='The Lord of Rings'
        year='2003'
      >
        “I see in your eyes the same <br /> fear that would take the <br />
        heart of me....”
      </MoviePoster>

      <Footer />
    </div>
  );
}
