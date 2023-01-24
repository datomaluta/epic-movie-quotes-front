import { useDispatch } from 'react-redux'
import { authActions } from 'store'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerFormValidationSchema } from 'schemas'
import { getRegisterRequest } from 'services'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { RegisterFormFields } from 'types'

const useSignupModal = () => {
  const dispatch = useDispatch()
  const showLoginFormHandler = () => {
    dispatch(authActions.hideSignupModal())
    dispatch(authActions.showLoginModal())
  }

  const { t } = useTranslation()
  const [errors, setErrors] = useState({ name: '' })

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
  }
}

export default useSignupModal
