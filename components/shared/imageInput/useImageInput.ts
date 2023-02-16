import { convertBase64 } from 'helpers'
import { useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { userActions } from 'store'

const useImageInput = (name: string) => {
  const form = useFormContext()
  const dispatch = useDispatch()
  const userData = useSelector((state: RootState) => state.user)

  const inputData = useWatch({
    name: name,
    control: form.control,
  })

  const [baseImage, setBaseImage] = useState('')

  useEffect(() => {
    const baseImageSetter = async () => {
      const base = await convertBase64(inputData[0])
      setBaseImage(base)
    }
    if (inputData[0]) {
      baseImageSetter()

      setBaseImage('')
      dispatch(dispatch(userActions.uploadImage({ avatar: inputData[0] })))
    }
  }, [inputData, dispatch])

  const { t } = useTranslation()

  return { form, baseImage, userData, t }
}

export default useImageInput
