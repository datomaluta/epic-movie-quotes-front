import { useDispatch } from 'react-redux'
import { authActions } from 'store'

const useConfirmEmailModal = () => {
  const dispatch = useDispatch()

  const hideConfirmEmailModalHandler = () => {
    dispatch(authActions.hideShowForgotPasswordEmailModal())
  }

  return { hideConfirmEmailModalHandler }
}

export default useConfirmEmailModal
