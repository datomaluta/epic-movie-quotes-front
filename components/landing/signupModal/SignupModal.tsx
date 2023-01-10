import {
  GoogleIcon,
  BackdropWrapper,
  ModalWrapper,
  TextInput,
} from 'components';

import useSignupModal from './useSignupModal';

const SignupForm: React.FC = () => {
  const { showLoginFormHandler, translate } = useSignupModal();

  return (
    <BackdropWrapper>
      <ModalWrapper>
        <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3'>
          {translate('common:create_an_account')}
        </h1>
        <p className='text-light-grey mb-6'>
          {translate('common:start_your_journey')}
        </p>
        <form>
          <TextInput
            label={translate('common:name')}
            type='text'
            placeholder={translate('common:name_placeholder')}
          />

          <TextInput
            label={translate('common:email')}
            type='email'
            placeholder={translate('common:email_placeholder')}
          />

          <TextInput
            label={translate('common:password')}
            type='password'
            placeholder={translate('common:password')}
          />

          <TextInput
            label={translate('common:confirm_password')}
            type='password'
            placeholder={translate('common:confirm_password')}
          />

          <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
            {translate('common:get_started')}
          </button>
          <button className='border border-very-light-grey rounded  w-[22.5rem] mt-4 flex items-center justify-center gap-2 py-[0.438rem]'>
            <GoogleIcon />
            <span className='text-white'>
              {' '}
              {translate('common:signup_with_google')}
            </span>
          </button>

          <p className='text-light-grey mt-8 text-center'>
            {translate('home:already_have_account')}
            <button
              type='submit'
              onClick={showLoginFormHandler}
              className='text-theme-primary underline cursor-pointer ml-1'
            >
              {translate('home:login')}
            </button>
          </p>
        </form>
      </ModalWrapper>
    </BackdropWrapper>
  );
};

export default SignupForm;
