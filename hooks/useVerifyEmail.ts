import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEmailVerifyRequest } from 'services'
import { authActions } from 'store'

const useVerifyEmail = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (router.query.verify_url) {
      getEmailVerifyRequest(router.query.verify_url)
      dispatch(authActions.setShowVerifiedEmailModal())
      router.replace('/', undefined, { shallow: true })
    }
  }, [router.query.verify_url, router, dispatch])
}

export default useVerifyEmail
