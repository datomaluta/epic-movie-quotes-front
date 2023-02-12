import { LangSwitch } from 'components'
import useLanguageSwitcher from './useLanguageSwitcher'

const LanguageSwitcher: React.FC = () => {
  const { showLanguageChanger, languageChanging, setLocaleHandler, router } =
    useLanguageSwitcher()
  return (
    <div className='relative text-white'>
      <button
        onClick={showLanguageChanger}
        className='flex items-center gap-[0.625rem] sm:gap-1  sm:mr-4'
      >
        <span>{router.locale === 'en' ? 'Eng' : 'ქარ'}</span>
        <LangSwitch />
      </button>
      {languageChanging && (
        <div className='flex flex-col w-12 bg-dark-red  absolute top-[120%] left-0 rounded overflow-hidden'>
          <button
            className='border-b border-white py-1 hover:bg-red-500'
            onClick={() => setLocaleHandler('en')}
          >
            En
          </button>
          <button
            className='py-1 hover:bg-red-500'
            onClick={() => setLocaleHandler('ka')}
          >
            Ka
          </button>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
