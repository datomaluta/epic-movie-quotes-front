import { BackdropWrapper, EmailSendCheckIcon, ModalWrapper } from 'components'
import { PropsType } from './types'
import useConfirmEmailModal from './useConfirmEmailModal'

const ConfirmEmailModal: React.FC<PropsType> = (props) => {
  const { hideConfirmEmailModalHandler } = useConfirmEmailModal()
  return (
    <BackdropWrapper>
      <ModalWrapper>
        <div
          className={`flex flex-col px-24 sm:px-8 ${
            props.type === 'passwordReset' ? 'sm:py-4' : 'sm:py-24'
          } sm:mt-6 items-center py-4 sm:bg-email-modal sm:rounded-[0.625rem] sm:w-[85%]`}
        >
          <EmailSendCheckIcon />

          <h1 className='text-[2rem] sm:text-2xl font-medium text-white mt-5 sm:mt-4 mb-8 sm:mb-6'>
            {props.type === 'passwordReset' ? 'Check your email' : 'Thank you!'}
          </h1>
          <p className='text-white text-center mb-10 sm:mb-6'>
            {props.type === 'passwordReset'
              ? 'We have sent a password recover instructions to your email'
              : 'Please check your email and follow the instructions to activate your account.'}
          </p>

          <button
            className={`rounded bg-dark-red w-[22.5rem] ${
              props.type === 'passwordReset' ? 'sm:w-full' : 'sm:w-[11.875rem]'
            } py-2 text-white`}
          >
            Go To my email
          </button>

          {props.type === 'passwordReset' && (
            <button
              type='button'
              className='text-light-grey mt-8'
              onClick={hideConfirmEmailModalHandler}
            >
              Skip, I’ll confirm later
            </button>
          )}
        </div>
      </ModalWrapper>
    </BackdropWrapper>
  )
}

export default ConfirmEmailModal
