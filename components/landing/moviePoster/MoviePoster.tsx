import { QuoteLine, QuoteMiniLine } from 'components';
import { PropsType } from './types';

const MoviePoster: React.FC<PropsType> = (props) => {
  return (
    <div
      className={`${props.background} text-white h-screen relative bg-fixed bg-center bg-cover`}
    >
      <div
        className={`flex gap-4 sm:gap-2 absolute top-[35%] left-[9%] sm:left-[5%]`}
      >
        <div className='pt-8 sm:hidden'>
          <QuoteLine />
        </div>
        <div className='pt-3 hidden sm:block'>
          <QuoteMiniLine />
        </div>
        <p className='font-montserrat font-bold text-[3.125rem] sm:text-xl max-w-[49.563rem] sm:max-w-[20.063rem]'>
          {props.children}
          <span className='block text-3xl sm:text-base mt-2'>
            {props.movie}, {props.year}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MoviePoster;
