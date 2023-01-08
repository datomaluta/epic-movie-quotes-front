import { LangSwitch } from 'components';

import useLandingNavBar from './useLandingNavBar';

const LandingNavBar: React.FC = () => {
  const { showSignupModalHandler, showLoginModalHandler } = useLandingNavBar();

  return (
    <nav className='flex justify-between items-center py-6 px-[4.375rem] lg:px-8 fixed top-0 left-0 w-full z-10 sm:absolute'>
      <div className='text-dark-yellow font-medium'>MOVIE QUOTES</div>
      <div className='text-white flex items-center'>
        <button className='flex items-center gap-[0.625rem] sm:hidden'>
          <span>Eng</span> <LangSwitch />
        </button>
        <button
          onClick={showSignupModalHandler}
          className='bg-dark-red px-[1.594rem] py-2 rounded mr-4 ml-10 sm:hidden'
        >
          Sign Up
        </button>
        <button
          onClick={showLoginModalHandler}
          className='border border-white px-[1.594rem] py-[0.438rem] rounded'
        >
          Log in
        </button>
      </div>
    </nav>
  );
};

export default LandingNavBar;
