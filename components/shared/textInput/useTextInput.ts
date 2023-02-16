import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { userActions } from 'store'

export const useTextInput = (name: string) => {
  const form = useFormContext()
  const { t } = useTranslation()
  const isInValid = form.getFieldState(name).invalid
  const isDirty = form.getFieldState(name).isDirty
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [passwordFieldType, setPasswordFieldType] = useState('password')
  const router = useRouter()

  const passwordShowClickHandler = () => {
    inputRef.current!.type =
      inputRef.current!.type === 'text' ? 'password' : 'text'
    setPasswordFieldType(inputRef.current!.type)
  }

  const inputData = useWatch({
    name: name,
    control: form.control,
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.updateUserData({ type: name, value: inputData }))
  }, [dispatch, name, inputData])

  console.log(inputData)

  const { ref, ...rest } = form.register(name)

  return {
    form,
    t,
    isInValid,
    isDirty,
    inputRef,
    passwordShowClickHandler,
    passwordFieldType,
    ref,
    rest,
    router,
  }
}
