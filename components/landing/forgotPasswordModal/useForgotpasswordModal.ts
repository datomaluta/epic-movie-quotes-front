import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { forgotPasswordValidationSchema } from 'schemas'
import { fetchCSRFToken, sendPasswordResetEmail } from 'services'
import { authActions } from 'store'
import { ForgotPasswordField } from 'types'

const useForgotPasswordModal = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const backToLoginModal = () => {
    dispatch(authActions.setBackToLoginModal())
  }

  const form = useForm<ForgotPasswordField>({
    mode: 'all',
    resolver: yupResolver(forgotPasswordValidationSchema),
    defaultValues: { email: '' },
  })

  const { mutate, isLoading } = useMutation(sendPasswordResetEmail, {
    onSuccess: () => {
      dispatch(authActions.setHideForgotPasswordModal())
      dispatch(authActions.setShowForgotPasswordEmailModal())
    },
    onError: (error: any) => {
      setError(error?.response?.data?.message)
    },
  })

  const onSubmit = async (data: ForgotPasswordField) => {
    await fetchCSRFToken()
    mutate(data)
  }

  return { backToLoginModal, form, onSubmit, error, isLoading }
}

export default useForgotPasswordModal
