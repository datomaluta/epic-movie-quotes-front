import { Google, ModalWrapper } from 'components';
import { useDispatch } from 'react-redux';
import { authActions } from 'store';

const LoginModal: React.FC = () => {
  const dispatch = useDispatch();

  const moveToSignupHandler = () => {
    dispatch(authActions.hideLoginModal());
    dispatch(authActions.showSignupModal());
  };

  return (
    <ModalWrapper>
      <div className='w-[37.563rem] bg-light-blue sm:bg-signup-gradient  rounded-[0.625rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center py-[3.313rem] sm:w-full sm:h-screen'>
        <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3'>
          Log in to your account
        </h1>
        <p className='text-light-grey mb-6'>
          Welcome back! Please enter your details.
        </p>
        <form>
          <div className='mb-4'>
            <label className='text-white mb-2 block'>
              Email
              <span className='text-red-danger inline-block ml-1'>*</span>
            </label>
            <input
              type='email'
              placeholder='Enter your email'
              className='py-2 px-3 w-[22.5rem] block placeholder:text-light-grey rounded'
            />
          </div>

          <div className='mb-4'>
            <label className='text-white mb-2 block'>
              Password
              <span className='text-red-danger inline-block ml-1'>*</span>
            </label>
            <input
              type='password'
              placeholder='At least 8 & max.15 lower case characters'
              className='py-2 px-3 w-[22.5rem] block placeholder:text-light-grey rounded'
            />
          </div>

          <div className='flex justify-between items-center mb-2'>
            <div>
              <input
                type='checkbox'
                id='remember'
                className='inline-block mr-2'
              />
              <label htmlFor='remember' className='text-white'>
                Remember me
              </label>
            </div>
            <button type='button' className='text-theme-primary underline'>
              Forgot password
            </button>
          </div>

          <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
            Sign in
          </button>
          <button className='border border-very-light-grey rounded  w-[22.5rem] mt-4 flex items-center justify-center gap-2 py-[0.438rem]'>
            <Google />
            <span className='text-white'> Sign in with Google</span>
          </button>

          <p className='text-light-grey mt-8 text-center'>
            Don&apos;t have an account?
            <span
              onClick={moveToSignupHandler}
              className='text-theme-primary underline cursor-pointer ml-1'
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default LoginModal;
