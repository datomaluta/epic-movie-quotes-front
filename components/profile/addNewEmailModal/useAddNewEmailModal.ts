import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { forgotPasswordValidationSchema } from 'schemas'
import { addNewEmail, fetchCSRFToken } from 'services'
import { DataType, HookPropsType } from './types'

const useAddNewEmailModal = (props: HookPropsType) => {
  const [error, setError] = useState('')
  const queryClient = useQueryClient()
  const newEmailForm = useForm({
    mode: 'all',
    resolver: yupResolver(forgotPasswordValidationSchema),
    defaultValues: { email: '' },
  })

  const { mutate: newEmailMutation } = useMutation(addNewEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('userData')
      props.showOrHideModal(false)
    },
    onError: () => {
      setError('Something went wrong!')
    },
  })

  const onSubmit = async (data: DataType) => {
    await fetchCSRFToken()
    newEmailMutation(data)
  }

  return { newEmailForm, onSubmit, error }
}

export default useAddNewEmailModal
