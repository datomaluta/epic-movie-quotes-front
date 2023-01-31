import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { authActions } from 'store'

const useVerifiedEmail = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const goToLoginModal = () => {
    dispatch(authActions.hideShowVerifiedEmailModal())
    dispatch(authActions.showLoginModal())
  }

  return { goToLoginModal, t }
}

export default useVerifiedEmail
