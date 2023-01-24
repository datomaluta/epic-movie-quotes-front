import { useDispatch } from 'react-redux'
import { authActions } from 'store'
import { useTranslation } from 'react-i18next'
import { FormInputs } from './types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginFormValidationSchema } from 'schemas'
import { useRouter } from 'next/router'
import { fetchCSRFToken, login } from 'services'
import { useState } from 'react'
import { deleteCookie } from 'cookies-next'

const useLoginModal = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [error, setError] = useState('')

  const moveToSignupHandler = () => {
    dispatch(authActions.hideLoginModal())
    dispatch(authActions.showSignupModal())
  }

  const showForgotPasswordModalHandler = () => {
    dispatch(authActions.setShowForgotPasswordModal())
  }

  const { t } = useTranslation()

  const form = useForm<FormInputs>({
    mode: 'all',
    resolver: yupResolver(loginFormValidationSchema),
    defaultValues: { email_username: '', password: '' },
  })

  const onSubmit = async (data: FormInputs) => {
    try {
      await fetchCSRFToken()
      await login(data)
      router.push('/news-feed')
    } catch (error: any) {
      deleteCookie('XSRF-TOKEN')
      setError(error?.response?.data?.message)
    }
  }

  return {
    moveToSignupHandler,
    showForgotPasswordModalHandler,
    translate: t,
    form,
    onSubmit,
    error,
  }
}

export default useLoginModal
