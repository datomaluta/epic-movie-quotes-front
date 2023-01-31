import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { authActions } from 'store'

const usePasswordChanged = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const goToLoginHandler = () => {
    dispatch(authActions.hidePasswordChangedModal())
    dispatch(authActions.showLoginModal())
  }

  return { t, goToLoginHandler }
}

export default usePasswordChanged
