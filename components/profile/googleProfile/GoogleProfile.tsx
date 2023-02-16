import { useGetTranslation } from 'hooks'
import Image from 'next/image'
import { bigAvatar } from 'public'
import { PropsType } from './types'

const GoogleProfile: React.FC<PropsType> = (props) => {
  const { t } = useGetTranslation()
  return (
    <div className='ml-[28rem] xl:ml-[20rem] lg:hidden max-w-[62.375rem] relative'>
      <p className='text-2xl mb-[7.875rem] font-medium'>
        {t('common:my_profile')}
      </p>
      <div className=' bg-profile-dark-blue pb-10 rounded-xl relative pt-[12.188rem] px-[4.813rem] xl:px-[2rem]'>
        <div className='flex flex-col gap-3 items-center absolute -top-16 left-1/2 -translate-x-1/2'>
          <Image src={bigAvatar} alt='avatar' />
        </div>

        <div className='mb-10'>
          <label className='mb-2 inline-block'>{t('common:username')}</label>
          <div className='flex items-baseline gap-[2.063rem]'>
            <div className='max-w-[33rem] w-full mb-6 bg-very-light-grey text-input-black px-[1.063rem] py-[0.563rem] rounded-[0.3rem]'>
              {props.userData?.name}
            </div>
          </div>
          <div className='max-w-[33rem] bg-very-light-grey h-[0.006rem] bg-opacity-25 mt-4'></div>
        </div>

        <div>
          {props.userData?.emails?.map((email) => (
            <div key={email.id} className='mb-8'>
              <label className='mb-2 inline-block'>{t('common:email')}</label>
              <div className='flex items-center'>
                <div
                  className={`min-w-[33rem] mr-[2.063rem] relative text-black bg-very-light-grey px-[1.063rem] py-[0.563rem] rounded-[0.3rem]  `}
                >
                  {email.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default GoogleProfile
