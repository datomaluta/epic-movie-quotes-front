import { HomeIcon, MovieIcon } from 'components/icons'
import { useGetTranslation } from 'hooks'
import Image from 'next/image'
import Link from 'next/link'
import { profilePicture } from 'public'
import { useSelector } from 'react-redux'
import { NoSSR } from '../noSSR'
import { PropsType } from './types'
import useSidebar from './useSidebar'

const Sidebar: React.FC<PropsType> = (props) => {
  const { t, userData } = useSidebar()
  console.log(userData)

  return (
    <NoSSR>
      <div className='flex  fixed flex-col gap-11 max-w-[28.188rem] lg:hidden bg-blue-500'>
        <Link href='/profile'>
          <div className='flex gap-6 w-max'>
            {userData.profile_image_url ? (
              <div className='rounded-full overflow-hidden border-2 border-dark-red '>
                <Image
                  width={200}
                  height={200}
                  src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${userData.profile_image_url}`}
                  alt='profile picture'
                  className='w-[3.75rem] h-[3.75rem] object-cover'
                />
              </div>
            ) : (
              <div className='rounded-full overflow-hidden border-2 border-dark-red '>
                <Image src={profilePicture} alt='avatar' className='' />
              </div>
            )}
            <div>
              <p className='text-2xl xl:text-lg'>
                {/* {props.userQuery?.data?.data?.user?.name} */}
                {userData.name}
              </p>
              <p className='xl:text-sm'>{t('common:edit_your_profile')}</p>
            </div>
          </div>
        </Link>
        <div className='flex items-center gap-11 pl-[0.625rem]'>
          <HomeIcon />
          <Link href='/news-feed' className='text-2xl xl:text-lg'>
            {t('common:news_feed')}
          </Link>
        </div>
        <div className='flex items-center gap-11 pl-[0.625rem]'>
          <MovieIcon />
          <Link href='/movies' className='text-2xl xl:text-lg'>
            {t('common:list_of_movies')}
          </Link>
        </div>
      </div>
    </NoSSR>
  )
}
export default Sidebar
