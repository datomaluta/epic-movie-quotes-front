import { BackdropWrapper, ModalWrapper, EmailSendCheckIcon } from 'components'

const VerifiedEmailModal: React.FC = () => {
  return (
    <BackdropWrapper>
      <ModalWrapper>
        <div className='flex flex-col px-24 sm:px-8 sm:py-24 sm:mt-6 items-center py-4 sm:bg-email-modal sm:rounded-[0.625rem] sm:w-[85%]'>
          <EmailSendCheckIcon />
          <h1 className='text-[2rem] sm:text-2xl font-medium text-white mt-5 sm:mt-4 mb-8 sm:mb-6'>
            Thank you!
          </h1>
          <p className='text-white text-center mb-10 sm:mb-6'>
            Your account has been activated
          </p>
          <button className='rounded bg-dark-red w-[22.5rem] sm:w-[11.875rem] sm py-2 text-white'>
            Go To my news feed
          </button>
        </div>
      </ModalWrapper>
    </BackdropWrapper>
  )
}

export default VerifiedEmailModal
