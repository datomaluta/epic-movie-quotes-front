import { Line } from 'components';

const MoviePoster: React.FC<{ background: string; position: string }> = (
  props
) => {
  return (
    <div
      className={`bg-${props.background} text-white h-[75rem] relative bg-fixed bg-bottom`}
    >
      <div className={`flex gap-4 absolute top-[${props.position}%] left-[9%]`}>
        <div className='pt-8'>
          <Line />
        </div>
        <p className='font-montserrat font-bold text-[3.125rem]'>
          “You have to leave something <br /> behind to go forward”
          <span className='block text-3xl mt-2'>Interstellar, 2014</span>
        </p>
      </div>
    </div>
  );
};

export default MoviePoster;
