import { useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { userActions } from 'store/user/userSlice'

const useProfileTextInput = (name: string) => {
  const form = useFormContext()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const inputData = useWatch({
    name: name,
    control: form.control,
  })

  useEffect(() => {
    dispatch(userActions.updateUserData({ type: name, value: inputData }))
  }, [dispatch, name, inputData])

  return { form, t }
}

export default useProfileTextInput
