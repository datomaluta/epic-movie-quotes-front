import { useSelector } from 'react-redux'
import { RootState } from 'store'

const useShowModals = () => {
  const isRegistering = useSelector(
    (state: RootState) => state.auth.isRegistering
  )

  const isLogining = useSelector((state: RootState) => state.auth.isLogining)

  const showForgotPasswordModal = useSelector(
    (state: RootState) => state.auth.showForgotPasswordModal
  )

  const showConfirmEmailSentModal = useSelector(
    (state: RootState) => state.auth.showConfirmEmailSentModal
  )

  const showVerifiedEmailModal = useSelector(
    (state: RootState) => state.auth.showVerifiedEmailModal
  )

  const showForgotPasswordEmailModal = useSelector(
    (state: RootState) => state.auth.showForgotPasswordEmailModal
  )

  const showNewPasswordModal = useSelector(
    (state: RootState) => state.auth.showNewPasswordModal
  )

  const showPasswordChangedModal = useSelector(
    (state: RootState) => state.auth.showPasswordChangedModal
  )

  return {
    isRegistering,
    isLogining,
    showForgotPasswordModal,
    showConfirmEmailSentModal,
    showVerifiedEmailModal,
    showForgotPasswordEmailModal,
    showNewPasswordModal,
    showPasswordChangedModal,
  }
}

export default useShowModals
