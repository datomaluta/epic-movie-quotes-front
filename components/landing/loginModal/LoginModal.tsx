import {
  GoogleIcon,
  BackdropWrapper,
  ModalWrapper,
  TextInput,
} from 'components'
import { FormProvider } from 'react-hook-form'
import useLoginModal from './useLoginModal'

const LoginModal: React.FC = () => {
  const {
    moveToSignupHandler,
    showForgotPasswordModalHandler,
    translate,
    form,
    onSubmit,
    error,
  } = useLoginModal()

  return (
    <FormProvider {...form}>
      <BackdropWrapper>
        <ModalWrapper>
          <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3'>
            {translate('common:login_to_profile')}
          </h1>
          <p className='text-light-grey mb-6'>
            {translate('common:welcome_back')}
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <TextInput
              name='email_username'
              label={translate('common:email')}
              type='text'
              placeholder={translate('common:email_placeholder')}
              error={error}
            />

            <TextInput
              name='password'
              label={translate('common:password')}
              type='password'
              placeholder={translate('common:password')}
            />

            <div className='flex justify-between items-center mb-2'>
              <div>
                <input
                  type='checkbox'
                  id='remember'
                  className='inline-block mr-2'
                />
                <label htmlFor='remember' className='text-white'>
                  {translate('common:remember_me')}
                </label>
              </div>
              <button
                onClick={showForgotPasswordModalHandler}
                type='button'
                className='text-theme-primary underline'
              >
                {translate('common:forgot_password')}
              </button>
            </div>

            <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
              {translate('common:sign_in')}
            </button>
            <button
              type='button'
              className='border border-very-light-grey rounded  w-[22.5rem] mt-4 flex items-center justify-center gap-2 py-[0.438rem]'
            >
              <GoogleIcon />
              <span className='text-white'>
                {' '}
                {translate('common:sign_in_with_google')}
              </span>
            </button>

            <p className='text-light-grey mt-8 text-center'>
              {translate('common:dont_have_an_account')}
              <span
                onClick={moveToSignupHandler}
                className='text-theme-primary underline cursor-pointer ml-1'
              >
                {translate('common:sign_up')}
              </span>
            </p>
          </form>
        </ModalWrapper>
      </BackdropWrapper>
    </FormProvider>
  )
}

export default LoginModal
