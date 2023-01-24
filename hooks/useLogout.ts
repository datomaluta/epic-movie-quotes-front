import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { logout } from 'services'

const useLogout = () => {
  const router = useRouter()
  const logoutHandler = async () => {
    await logout()
    deleteCookie('XSRF-TOKEN')
    router.reload()
  }

  return { logoutHandler }
}

export default useLogout
