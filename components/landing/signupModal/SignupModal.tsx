import {
  GoogleIcon,
  BackdropWrapper,
  ModalWrapper,
  TextInput,
} from 'components';

import useSignupModal from './useSignupModal';

const SignupForm: React.FC = () => {
  const { showLoginFormHandler } = useSignupModal();

  return (
    <BackdropWrapper>
      <ModalWrapper>
        <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3'>
          Create an account
        </h1>
        <p className='text-light-grey mb-6'>Start your journey!</p>
        <form>
          <TextInput
            label='Name'
            type='text'
            placeholder='At least 3 & max.15 lower case characters'
          />

          <TextInput
            label='Email'
            type='email'
            placeholder='Enter your email'
          />

          <TextInput
            label='Password'
            type='password'
            placeholder='At least 8 & max.15 lower case characters'
          />

          <TextInput
            label='Confirm password'
            type='password'
            placeholder='Confirm password'
          />

          <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
            Get Started
          </button>
          <button className='border border-very-light-grey rounded  w-[22.5rem] mt-4 flex items-center justify-center gap-2 py-[0.438rem]'>
            <GoogleIcon />
            <span className='text-white'> Sign up with Google</span>
          </button>

          <p className='text-light-grey mt-8 text-center'>
            Already have an account?
            <button
              type='submit'
              onClick={showLoginFormHandler}
              className='text-theme-primary underline cursor-pointer'
            >
              Log in
            </button>
          </p>
        </form>
      </ModalWrapper>
    </BackdropWrapper>
  );
};

export default SignupForm;
