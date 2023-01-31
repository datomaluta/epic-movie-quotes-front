import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { authActions } from 'store'

const useConfirmEmailModal = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const hideConfirmEmailModalHandler = () => {
    dispatch(authActions.hideShowForgotPasswordEmailModal())
  }

  return { hideConfirmEmailModalHandler, t }
}

export default useConfirmEmailModal
