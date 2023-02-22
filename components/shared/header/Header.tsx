import {
  BurgerIcon,
  LanguageSwitcher,
  MobileNotificationIcon,
  NoSSR,
  NotificationIcon,
  SearchIcon,
} from 'components'
import { useLogout } from 'hooks'

const Header: React.FC = () => {
  const { logoutHandler, t } = useLogout()

  return (
    <NoSSR>
      <header className='flex items-center fixed z-50 w-full bg-header-dark bg-opacity-75 backdrop-blur justify-between h-[5.375rem] px-[4.313rem] sm:px-[2.375rem]'>
        <div className='text-dark-yellow font-medium sm:hidden'>
          MOVIE QUOTES
        </div>
        <button className='hidden sm:block'>
          <BurgerIcon />
        </button>
        <nav className='flex items-center gap-11 sm:gap-5'>
          <button className='hidden sm:block'>
            <SearchIcon />
          </button>
          <button className='relative'>
            <span className='absolute sm:text-sm -top-1.5 sm:-top-1 -right-3 sm:-right-1.5 font-medium bg-red-to-orange w-[1.563rem] sm:w-[1rem] h-[1.563rem] sm:h-[1rem] flex items-center justify-center rounded-2xl'>
              3
            </span>
            <div className='sm:hidden'>
              <NotificationIcon />
            </div>
            <div className='hidden sm:block'>
              <MobileNotificationIcon />
            </div>
          </button>
          <div className='sm:hidden'>
            <LanguageSwitcher />
          </div>
          <button
            onClick={logoutHandler}
            className='border border-white px-[1.594rem] py-[0.438rem] rounded sm:hidden'
          >
            {t('common:logout')}
          </button>
        </nav>
      </header>
    </NoSSR>
  )
}

export default Header
