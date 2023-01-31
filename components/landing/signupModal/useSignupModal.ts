import { useDispatch } from 'react-redux'
import { authActions } from 'store'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerFormValidationSchema } from 'schemas'
import { fetchCSRFToken, getRegisterRequest } from 'services'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { RegisterFormFields } from 'types'
import { useGoogleAuth } from 'hooks'

const useSignupModal = () => {
  const dispatch = useDispatch()
  const showLoginFormHandler = () => {
    dispatch(authActions.hideSignupModal())
    dispatch(authActions.showLoginModal())
  }

  const { t } = useTranslation()
  const [errors, setErrors] = useState({ name: '', email: '' })

  const { authWithGoogleHandler, googleError } = useGoogleAuth()

  const form = useForm<RegisterFormFields>({
    mode: 'all',
    resolver: yupResolver(registerFormValidationSchema),
    defaultValues: { name: '', email: '', password: '', confirm_password: '' },
  })

  const { mutate, isLoading } = useMutation(getRegisterRequest, {
    onSuccess: () => {
      dispatch(authActions.setShowConfirmEmailSendModal())
    },
  })

  const onSubmit = async (data: RegisterFormFields) => {
    await fetchCSRFToken()
    mutate(data, {
      onError: (error: any) => {
        setErrors(error?.response?.data?.errors)
      },
    })
  }

  return {
    showLoginFormHandler,
    translate: t,
    form,
    onSubmit,
    errors,
    isLoading,
    authWithGoogleHandler,
    googleError,
  }
}

export default useSignupModal
