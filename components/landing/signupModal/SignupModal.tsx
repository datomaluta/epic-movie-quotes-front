import {
  GoogleIcon,
  BackdropWrapper,
  ModalWrapper,
  TextInput,
} from 'components';
import { useTranslation } from 'react-i18next';

import useSignupModal from './useSignupModal';

const SignupForm: React.FC = () => {
  const { showLoginFormHandler } = useSignupModal();
  const { t } = useTranslation();

  return (
    <BackdropWrapper>
      <ModalWrapper>
        <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3'>
          {t('common:create_an_account')}
        </h1>
        <p className='text-light-grey mb-6'>{t('common:start_your_journey')}</p>
        <form>
          <TextInput
            label={t('common:name')}
            type='text'
            placeholder={t('common:name_placeholder')}
          />

          <TextInput
            label={t('common:email')}
            type='email'
            placeholder={t('common:email_placeholder')}
          />

          <TextInput
            label={t('common:password')}
            type='password'
            placeholder={t('common:password')}
          />

          <TextInput
            label={t('common:confirm_password')}
            type='password'
            placeholder={t('common:confirm_password')}
          />

          <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
            {t('common:get_started')}
          </button>
          <button className='border border-very-light-grey rounded  w-[22.5rem] mt-4 flex items-center justify-center gap-2 py-[0.438rem]'>
            <GoogleIcon />
            <span className='text-white'>
              {' '}
              {t('common:signup_with_google')}
            </span>
          </button>

          <p className='text-light-grey mt-8 text-center'>
            {t('home:already_have_account')}
            <button
              type='submit'
              onClick={showLoginFormHandler}
              className='text-theme-primary underline cursor-pointer ml-1'
            >
              {t('home:login')}
            </button>
          </p>
        </form>
      </ModalWrapper>
    </BackdropWrapper>
  );
};

export default SignupForm;
