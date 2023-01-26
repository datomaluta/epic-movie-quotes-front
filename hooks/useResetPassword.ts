import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from 'store'

const useResetPassword = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    if (router.query.token) {
      localStorage.setItem('resetToken', router.query.token.toString())
      dispatch(authActions.setShowNewPasswordModal())
      router.replace('/', undefined, { shallow: true })
    }
  }, [router, dispatch])
}

export default useResetPassword
