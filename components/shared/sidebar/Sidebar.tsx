import { HomeIcon, MovieIcon } from 'components/icons'
import Image from 'next/image'
import Link from 'next/link'
import { profilePicture } from 'public'
import { useTranslation } from 'react-i18next'
import { PropsType } from './types'

const Sidebar: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()
  return (
    <div className='flex  fixed flex-col gap-11 max-w-[28.188rem] lg:hidden'>
      <Link href='/profile'>
        <div className='flex gap-6 w-max'>
          {props.userData.profile_image_url ? (
            <div className='rounded-full overflow-hidden border-2 border-dark-red '>
              <Image
                width={200}
                height={200}
                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${props.userData.profile_image_url}`}
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
            <p className='text-2xl'>
              {props.userQuery?.data?.data?.user?.name}
            </p>
            <p>{t('common:edit_your_profile')}</p>
          </div>
        </div>
      </Link>
      <div className='flex items-center gap-11 pl-[0.625rem]'>
        <HomeIcon />
        <Link href='/news-feed' className='text-2xl'>
          {t('common:news_feed')}
        </Link>
      </div>
      <div className='flex items-center gap-11 pl-[0.625rem]'>
        <MovieIcon />
        <p className='text-2xl'>{t('common:list_of_movies')}</p>
      </div>
    </div>
  )
}
export default Sidebar
