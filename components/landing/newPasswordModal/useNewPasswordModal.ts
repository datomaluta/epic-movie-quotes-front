import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { newPasswordValidationSchema } from 'schemas'
import { fetchCSRFToken, getNewPasswordRequest } from 'services'
import { authActions } from 'store'
import { NewPasswordFormFields } from 'types'

const UseNewPasswordModal = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const backToLoginModal = () => {
    dispatch(authActions.hideNewPasswordModal())
    dispatch(authActions.setBackToLoginModal())
  }

  const { t } = useTranslation()

  const form = useForm<NewPasswordFormFields>({
    mode: 'all',
    resolver: yupResolver(newPasswordValidationSchema),
    defaultValues: { password: '', confirm_password: '' },
  })

  const { mutate } = useMutation(getNewPasswordRequest, {
    onSuccess: () => {
      dispatch(authActions.hideNewPasswordModal())
      dispatch(authActions.showPasswordChangedModal())
      localStorage.removeItem('resetToken')
    },
    onError() {
      setError('Something went wrong!')
    },
  })

  const onSubmit = async (data: NewPasswordFormFields) => {
    await fetchCSRFToken()
    mutate({ token: localStorage.getItem('resetToken')!, data })
  }

  return {
    t,
    form,
    onSubmit,
    backToLoginModal,
    error,
  }
}

export default UseNewPasswordModal
