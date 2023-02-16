import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { logout } from 'services'

const useLogout = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const logoutHandler = async () => {
    await logout()
    deleteCookie('isLoggedIn')
    router.reload()
  }

  return { logoutHandler, t }
}

export default useLogout
