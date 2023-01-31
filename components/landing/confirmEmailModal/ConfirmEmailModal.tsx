import { BackdropWrapper, EmailSendCheckIcon, ModalWrapper } from 'components'
import Link from 'next/link'
import { PropsType } from './types'
import useConfirmEmailModal from './useConfirmEmailModal'

const ConfirmEmailModal: React.FC<PropsType> = (props) => {
  const { hideConfirmEmailModalHandler, t } = useConfirmEmailModal()
  return (
    <BackdropWrapper>
      <ModalWrapper>
        <div
          className={`flex flex-col px-24 sm:px-8 ${
            props.type === 'passwordReset' ? 'sm:py-4' : 'sm:py-24'
          } sm:mt-6 items-center py-4 sm:bg-email-modal sm:rounded-[0.625rem] sm:w-[85%] `}
        >
          <EmailSendCheckIcon />

          <h1 className='text-[2rem] sm:text-2xl font-medium text-white mt-5 sm:mt-4 mb-8 sm:mb-6'>
            {props.type === 'passwordReset'
              ? t('common:check_email')
              : t('common:thank_you')}
          </h1>
          <p className='text-white text-center mb-10 sm:mb-6'>
            {props.type === 'passwordReset'
              ? t('common:password_reset_instructions_sent')
              : t('common:activations_instructions_sent')}
          </p>

          <Link
            href='https://mail.google.com/'
            target='_blank'
            className={`rounded bg-dark-red w-[22.5rem] ${
              props.type === 'passwordReset' ? 'sm:w-full' : 'sm:w-[11.875rem]'
            } py-2 text-white text-center`}
          >
            {t('common:go_to_mail')}
          </Link>

          {props.type === 'passwordReset' && (
            <button
              type='button'
              className='text-light-grey mt-8'
              onClick={hideConfirmEmailModalHandler}
            >
              {t('common:skip_confirm')}
            </button>
          )}
        </div>
      </ModalWrapper>
    </BackdropWrapper>
  )
}

export default ConfirmEmailModal
