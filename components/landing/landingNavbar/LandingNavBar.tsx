import { LangSwitch } from 'components';
import { PropsType } from './types';
import useLandingNavBar from './useLandingNavBar';
import { useTranslation } from 'react-i18next';

const LandingNavBar: React.FC<PropsType> = (props) => {
  const {
    showSignupModalHandler,
    showLoginModalHandler,
    showLanguageChanger,
    setLocaleHandler,
    languageChanging,
  } = useLandingNavBar();

  const { t } = useTranslation();

  return (
    <nav className='flex justify-between items-center py-6 px-[4.375rem] lg:px-8 fixed top-0 left-0 w-full z-10 sm:absolute'>
      <div className='text-dark-yellow font-medium'>MOVIE QUOTES</div>
      <div className='text-white flex items-center'>
        <div className='relative'>
          <button
            onClick={showLanguageChanger}
            className='flex items-center gap-[0.625rem] sm:gap-1  sm:mr-4'
          >
            <span>{props.currentLocale === 'en' ? 'Eng' : 'ქარ'}</span>
            <LangSwitch />
          </button>
          {languageChanging && (
            <div className='flex flex-col w-12 bg-dark-red  absolute top-[120%] left-0 rounded overflow-hidden'>
              <button
                className='border-b border-white py-1 hover:bg-red-500'
                onClick={setLocaleHandler.bind(null, 'en')}
              >
                En
              </button>
              <button
                className='py-1 hover:bg-red-500'
                onClick={setLocaleHandler.bind(null, 'ka')}
              >
                Ka
              </button>
            </div>
          )}
        </div>

        <button
          onClick={showSignupModalHandler}
          className='bg-dark-red px-[1.594rem] py-2 rounded mr-4 ml-10 sm:hidden'
        >
          {t('common:sign_up')}
        </button>
        <button
          onClick={showLoginModalHandler}
          className='border border-white px-[1.594rem] py-[0.438rem] rounded'
        >
          {t('common:login')}
        </button>
      </div>
    </nav>
  );
};

export default LandingNavBar;
