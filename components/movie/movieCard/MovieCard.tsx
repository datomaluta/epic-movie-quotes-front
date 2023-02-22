import { CommentIcon } from 'components'
import Image from 'next/image'
import testMovie from './test2.png'

const MovieCard: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 max-w-[27.5rem] '>
      <div className='rounded-lg overflow-hidden bg-red-30 max-h-[23.188rem]'>
        <Image className='w-full h-full' src={testMovie} alt='movie' />
      </div>
      <p className='text-2xl font-medium text-white'>
        LOKI MOBIUS <span>2021</span>
      </p>
      <p className='font-medium text-xl text-white flex gap-3'>
        <span>10</span>
        <CommentIcon />
      </p>
    </div>
  )
}

export default MovieCard
