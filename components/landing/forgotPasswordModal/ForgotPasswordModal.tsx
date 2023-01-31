import {
  BackArrowIcon,
  BackdropWrapper,
  ModalWrapper,
  TextInput,
} from 'components'
import { FormProvider } from 'react-hook-form'
import useForgotPasswordModal from './useForgotpasswordModal'

const ForgotPasswordModal: React.FC = () => {
  const { backToLoginModal, form, onSubmit, error, isLoading, t } =
    useForgotPasswordModal()
  return (
    <FormProvider {...form}>
      <BackdropWrapper>
        <ModalWrapper>
          <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3'>
            {t('common:forgot_password')}
          </h1>
          {isLoading && <p className='h-4 text-white'>Loading...</p>}
          <p className='text-light-grey mb-6 text-center px-24 sm:px-4'>
            {t('enter_email_and_we_send')}
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <TextInput
              name='email'
              label={t('common:email')}
              type='email'
              placeholder={t('common:email_placeholder')}
              error={error}
            />

            <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
              {t('common:send_instructions')}
            </button>

            <button
              type='button'
              className='flex items-center mt-8 mx-auto gap-3'
              onClick={backToLoginModal}
            >
              <BackArrowIcon />
              <span className='text-light-grey'>{t('back_to_login')}</span>
            </button>
          </form>
        </ModalWrapper>
      </BackdropWrapper>
    </FormProvider>
  )
}

export default ForgotPasswordModal
