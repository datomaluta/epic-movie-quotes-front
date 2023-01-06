import { LangSwitch } from 'components';

const LandingNavBar: React.FC = () => {
  return (
    <nav className='flex justify-between items-center py-6 px-[4.375rem] fixed top-0 left-0 w-full z-10'>
      <div className='text-dark-yellow font-medium'>MOVIE QUOTES</div>
      <div className='text-white flex items-center'>
        <button className='flex items-center gap-[0.625rem]'>
          <span>Eng</span> <LangSwitch />
        </button>
        <button className='bg-dark-red px-[1.594rem] py-2 rounded mr-4 ml-10'>
          Sign Up
        </button>
        <button className='border border-white px-[1.594rem] py-[0.438rem] rounded'>
          Log in
        </button>
      </div>
    </nav>
  );
};

export default LandingNavBar;
