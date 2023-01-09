import {
  GoogleIcon,
  BackdropWrapper,
  ModalWrapper,
  TextInput,
} from 'components';
import useLoginModal from './useLoginModal';
import { useTranslation } from 'react-i18next';

const LoginModal: React.FC = () => {
  const { moveToSignupHandler, showForgotPasswordModalHandler } =
    useLoginModal();

  const { t } = useTranslation();

  return (
    <BackdropWrapper>
      <ModalWrapper>
        <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3'>
          {t('common:login_to_profile')}
        </h1>
        <p className='text-light-grey mb-6'>{t('common:welcome_back')}</p>
        <form>
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

          <div className='flex justify-between items-center mb-2'>
            <div>
              <input
                type='checkbox'
                id='remember'
                className='inline-block mr-2'
              />
              <label htmlFor='remember' className='text-white'>
                {t('common:remember_me')}
              </label>
            </div>
            <button
              onClick={showForgotPasswordModalHandler}
              type='button'
              className='text-theme-primary underline'
            >
              {t('common:forgot_password')}
            </button>
          </div>

          <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
            {t('common:sign_in')}
          </button>
          <button className='border border-very-light-grey rounded  w-[22.5rem] mt-4 flex items-center justify-center gap-2 py-[0.438rem]'>
            <GoogleIcon />
            <span className='text-white'>
              {' '}
              {t('common:sign_in_with_google')}
            </span>
          </button>

          <p className='text-light-grey mt-8 text-center'>
            {t('common:dont_have_an_account')}
            <span
              onClick={moveToSignupHandler}
              className='text-theme-primary underline cursor-pointer ml-1'
            >
              {t('common:sign_up')}
            </span>
          </p>
        </form>
      </ModalWrapper>
    </BackdropWrapper>
  );
};

export default LoginModal;
