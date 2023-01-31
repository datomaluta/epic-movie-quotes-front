import {
  BackArrowIcon,
  BackdropWrapper,
  ModalWrapper,
  NoSSR,
  TextInput,
} from 'components'
import { FormProvider } from 'react-hook-form'
import UseNewPasswordModal from './useNewPasswordModal'

const NewPasswordModal: React.FC = () => {
  const { form, onSubmit, t, backToLoginModal, error } = UseNewPasswordModal()
  return (
    <FormProvider {...form}>
      <BackdropWrapper>
        <ModalWrapper>
          <NoSSR>
            <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3 '>
              {t('common:create_new_password')}
            </h1>
            <p className='text-red-500'>{error}</p>
            <p className='text-light-grey mb-6 px-36 text-center '>
              {t('common:password_must_be_different_from_previous')}
            </p>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <TextInput
                name='password'
                label={t('common:password')}
                type='password'
                placeholder={t('common:password')}
              />

              <TextInput
                label={t('common:confirm_password')}
                type='password'
                placeholder={t('common:confirm_password')}
                name='confirm_password'
              />

              <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
                {t('reset_password')}
              </button>
            </form>
            <button
              type='button'
              className='flex items-center mt-8 mx-auto gap-3'
              onClick={backToLoginModal}
            >
              <BackArrowIcon />
              <span className='text-light-grey'>
                {t('common:back_to_login')}
              </span>
            </button>
          </NoSSR>
        </ModalWrapper>
      </BackdropWrapper>
    </FormProvider>
  )
}

export default NewPasswordModal
