import { Header, HomeIcon, MovieIcon } from 'components'
import { profilePicture } from 'public'
import Image from 'next/image'
import Link from 'next/link'
import { useNewsFeed } from 'hooks'

const NewsFeed = () => {
  const { userData, error } = useNewsFeed()

  return (
    <div className='bg-news-feed h-[1200px] text-white'>
      <Header />
      <div className='pt-[7.375rem] px-[4.313rem] flex'>
        <p>{error}</p>
        <div className='flex fixed flex-col gap-11 w-[33.125rem] '>
          <Link href='/profile'>
            <div className='flex gap-6 w-max'>
              <Image src={profilePicture} alt='profile picture' />
              <div>
                <p className='text-2xl'>{userData.name}</p>
                <p>Edit your profile</p>
              </div>
            </div>
          </Link>
          <div className='flex items-center gap-11 pl-[0.625rem]'>
            <HomeIcon />
            <p className='text-2xl'>News feed</p>
          </div>
          <div className='flex items-center gap-11 pl-[0.625rem]'>
            <MovieIcon />
            <p className='text-2xl'>List of movies</p>
          </div>
        </div>
        <div className='bg-red-500 ml-[33.125rem]'>posts</div>
      </div>
    </div>
  )
}

export default NewsFeed
