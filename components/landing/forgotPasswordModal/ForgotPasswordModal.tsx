import {
  BackArrowIcon,
  BackdropWrapper,
  ModalWrapper,
  TextInput,
} from 'components'
import { FormProvider } from 'react-hook-form'
import useForgotPasswordModal from './useForgotpasswordModal'

const ForgotPasswordModal: React.FC = () => {
  const { backToLoginModal, form, onSubmit, error, isLoading } =
    useForgotPasswordModal()
  return (
    <FormProvider {...form}>
      <BackdropWrapper>
        <ModalWrapper>
          <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3'>
            Forgot password?
          </h1>
          {isLoading && <p className='h-4 text-white'>Loading...</p>}
          <p className='text-light-grey mb-6 text-center'>
            Enter the email and we’ll send an email with <br /> instructions to
            reset your password
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <TextInput
              name='email'
              label='Email'
              type='email'
              placeholder='Enter Your Email'
              error={error}
            />

            <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
              Send Instructions
            </button>

            <button
              type='button'
              className='flex items-center mt-8 mx-auto gap-3'
              onClick={backToLoginModal}
            >
              <BackArrowIcon />
              <span className='text-light-grey'>Back to log in</span>
            </button>
          </form>
        </ModalWrapper>
      </BackdropWrapper>
    </FormProvider>
  )
}

export default ForgotPasswordModal
