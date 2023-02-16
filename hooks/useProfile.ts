import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import {
  forgotPasswordValidationSchema,
  newPasswordValidationSchema,
  newUserNameValidationSchema,
  updatePasswordValidationSchema,
} from 'schemas'
import {
  addNewEmail,
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
  const [showNewUsernameForm, setShowNewUsernameForm] = useState(false)
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false)
  const [showEmailsTab, setShowEmailsTab] = useState(false)
  const [showMobileNewEmailForm, setShowMobileNewEmailForm] = useState(false)
  const [showConfirmChangesModal, setShowConfirmChangesModal] = useState(false)
  const [whichFieldIsSubmiting, setWhichFieldIsSubmiting] = useState('')
  const [error, setError] = useState('')
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const router = useRouter()

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

  const { mutate: newEmailMutation } = useMutation(addNewEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('userData')
    },
    onError: () => {
      setError('Something went wrong!')
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

  const showNewUsernameFormHandler = (param: boolean) => {
    setShowNewUsernameForm(param)
  }

  const showNewPasswordFormHandler = (param: boolean) => {
    setShowNewPasswordForm(param)
  }

  const showMobileNewEmailFormHandler = (param: boolean) => {
    setShowMobileNewEmailForm(param)
  }

  const showEmailsTabHandler = (param: boolean) => {
    setShowEmailsTab(param)
  }

  const mobileAvatarForm = useForm({
    mode: 'all',
    defaultValues: { mobile_avatar: '' },
  })

  const mobileUserNameForm = useForm({
    mode: 'all',
    resolver: yupResolver(newUserNameValidationSchema),
    defaultValues: { username: userQuery.data?.data?.user?.name },
  })

  const mobilePasswordForm = useForm({
    mode: 'all',
    resolver: yupResolver(newPasswordValidationSchema),
  })

  const mobileEmailForm = useForm({
    mode: 'all',
    resolver: yupResolver(forgotPasswordValidationSchema),
  })

  const mobileAvatarSubmit = async () => {
    const formData = new FormData()
    formData.append('image', userData.profile_image_file)
    userDataMutate(formData)
    queryClient.invalidateQueries('userData')
  }

  const mobileUserNameSubmit = async () => {
    userDataMutate({ name: userData.name })
    queryClient.invalidateQueries('userData')
    setShowConfirmChangesModal(false)
    setShowNewUsernameForm(false)
  }

  const mobilePasswordSubmit = async () => {
    userDataMutate({ password: userData.new_password })
    setShowConfirmChangesModal(false)
    setShowNewPasswordForm(false)
  }

  const mobileEmailSubmit = async () => {
    newEmailMutation({ email: userData.new_email })
  }

  const showConfirmChangesModalHandler = (
    param: boolean,
    fieldName: string
  ) => {
    setWhichFieldIsSubmiting(fieldName)
    setShowConfirmChangesModal(param)
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
    showNewUsernameForm,
    showNewUsernameFormHandler,
    mobileUserNameForm,
    mobileUserNameSubmit,
    showNewPasswordForm,
    showNewPasswordFormHandler,
    showMobileNewEmailForm,
    showMobileNewEmailFormHandler,
    showEmailsTab,
    showEmailsTabHandler,
    showConfirmChangesModal,
    showConfirmChangesModalHandler,
    whichFieldIsSubmiting,
    mobilePasswordForm,
    mobilePasswordSubmit,
    mobileEmailForm,
    mobileEmailSubmit,
    mobileAvatarForm,
    mobileAvatarSubmit,
    router,
    t,
  }
}

export default useProfile
