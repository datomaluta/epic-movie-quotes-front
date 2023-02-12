import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import {
  newUserNameValidationSchema,
  updatePasswordValidationSchema,
} from 'schemas'
import {
  deleteEmail,
  fetchCSRFToken,
  getUserData,
  makeEmailPrimary,
  updateUserData,
} from 'services'
import { RootState, userActions } from 'store'

const useProfile = () => {
  const userData = useSelector((state: RootState) => state.user)
  const [userNameEditing, setUserNameEditing] = useState(false)
  const [passwordEditing, setPasswordEditing] = useState(false)
  const [showNewEmailModal, setShowNewEmailModal] = useState(false)
  const [error, setError] = useState('')
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const userQuery = useQuery('userData', getUserData, {
    onSuccess: (data) => {
      dispatch(userActions.setUserData({ userData: data?.data.user }))
    },
    onError: () => {
      setError('Something went wrong with fetching!')
    },
  })

  const avatarForm = useForm({
    mode: 'all',
    defaultValues: { avatar: '' },
  })

  const userNameForm = useForm({
    mode: 'all',
    resolver: yupResolver(newUserNameValidationSchema),
    defaultValues: { username: userQuery.data?.data?.user?.name },
  })

  const passwordForm = useForm({
    mode: 'all',
    resolver: yupResolver(updatePasswordValidationSchema),
    defaultValues: { password: '' },
  })

  const { mutate: userDataMutate } = useMutation(updateUserData, {
    onSuccess: () => {
      queryClient.invalidateQueries('userData')
      setError('')
      setUserNameEditing(false)
      setPasswordEditing(false)
      dispatch(userActions.updateAvatarImageAfterUpload())
    },
    onError: (error: any) => {
      setError(error?.response?.data?.message)
    },
  })

  const onSaveChanges = async () => {
    if (
      Object.keys(userNameForm.formState.errors).length === 0 &&
      Object.keys(passwordForm.formState.errors).length === 0
    ) {
      await fetchCSRFToken()
      const formData = new FormData()
      userNameEditing && formData.append('name', userData.name)
      passwordEditing && formData.append('password', userData.new_password)
      userData.profile_image_file &&
        formData.append('image', userData.profile_image_file)
      formData.append('_method', 'PATCH')
      userDataMutate(formData)
    }
  }

  const showNewEmailModalHandler = (param: boolean) => {
    setShowNewEmailModal(param)
  }

  const makeEmailPrimaryHandler = async (email_id: string) => {
    await makeEmailPrimary(email_id).catch(() =>
      setError('Something went wrong!')
    )
    queryClient.invalidateQueries('userData')
  }

  const deleteEmailHandler = async (email_id: string) => {
    await deleteEmail(email_id).catch(() => setError('Something went wrong'))
    queryClient.invalidateQueries('userData')
  }

  return {
    userNameForm,
    passwordForm,
    userNameEditing,
    setUserNameEditing,
    passwordEditing,
    setPasswordEditing,
    userData,
    onSaveChanges,
    userQuery,
    showNewEmailModal,
    showNewEmailModalHandler,
    makeEmailPrimaryHandler,
    deleteEmailHandler,
    error,
    avatarForm,
  }
}

export default useProfile
