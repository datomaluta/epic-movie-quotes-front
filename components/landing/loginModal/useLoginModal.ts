import { useDispatch } from 'react-redux'
import { authActions } from 'store'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginFormValidationSchema } from 'schemas'
import { useRouter } from 'next/router'
import { fetchCSRFToken, login } from 'services'
import { useState } from 'react'
import { deleteCookie, setCookie } from 'cookies-next'
import { LoginFormFields } from 'types'
import { useMutation } from 'react-query'
import { useGoogleAuth } from 'hooks'

const useLoginModal = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const { authWithGoogleHandler, googleError } = useGoogleAuth()

  const modalCloseHandler = () => {
    dispatch(authActions.hideLoginModal())
  }

  const moveToSignupHandler = () => {
    dispatch(authActions.hideLoginModal())
    dispatch(authActions.showSignupModal())
  }

  const showForgotPasswordModalHandler = () => {
    dispatch(authActions.setShowForgotPasswordModal())
  }

  const { t } = useTranslation()

  const form = useForm<LoginFormFields>({
    mode: 'all',
    resolver: yupResolver(loginFormValidationSchema),
    defaultValues: { email_username: '', password: '', rememberMe: false },
  })

  const { mutate } = useMutation(login, {
    onSuccess: () => {
      router.push('/news-feed')
      setCookie('isLoggedIn', '1')
    },
  })

  const onSubmit = async (data: LoginFormFields) => {
    await fetchCSRFToken()
    mutate(data, {
      onError: (error: any) => {
        deleteCookie('XSRF-TOKEN')
        setError(error?.response?.data?.message)
      },
    })
  }

  return {
    moveToSignupHandler,
    showForgotPasswordModalHandler,
    translate: t,
    form,
    onSubmit,
    error,
    authWithGoogleHandler,
    googleError,
    modalCloseHandler,
  }
}

export default useLoginModal
