import { useGetTranslation } from 'hooks'
import Image from 'next/image'
import { bigAvatar } from 'public'
import { PropsType } from './types'

const MobileGoogleProfile: React.FC<PropsType> = (props) => {
  const { t } = useGetTranslation()

  return (
    <div className='hidden lg:block bg-mobile-grey w-full rounded-xl pb-16 relative px-8'>
      <div className='flex flex-col gap-3 items-center mt-10'>
        <Image src={bigAvatar} alt='avatar' />
      </div>

      <div className='flex flex-col gap-1'>
        <p>{t('common:username')}</p>
        <div className='pb-4 border-b border-very-light-grey flex justify-between text-[1.125rem]'>
          <p>{props.userData.name}</p>
        </div>
      </div>

      <div className='flex flex-col gap-1 mt-8'>
        <p>{t('common:email')}</p>
        <div className='pb-4 border-b border-very-light-grey flex justify-between text-[1.125rem]'>
          <p>{props.userData.emails[0].email}</p>
        </div>
      </div>
    </div>
  )
}

export default MobileGoogleProfile
