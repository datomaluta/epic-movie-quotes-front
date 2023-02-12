import axios from 'axios'
import { useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCSRFToken, uploadAvatar } from 'services'
import { RootState } from 'store'
import { userActions } from 'store/user/userSlice'

const useImageInput = (name) => {
  const form = useFormContext()
  const dispatch = useDispatch()
  const userData = useSelector((state: RootState) => state.user)

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const inputData = useWatch({
    name: name,
    control: form.control,
  })

  //   console.log(inputData[0])
  const [baseImage, setBaseImage] = useState('')
  const [fileData, setFileData] = useState()

  const sendData = async (data) => {
    console.log(data)
    await fetchCSRFToken()
    const response = await uploadAvatar(data)
    console.log(response)
  }

  useEffect(() => {
    const baseImageSetter = async () => {
      const base = await convertBase64(inputData[0])
      //   console.log(base)
      setBaseImage(base)
    }
    if (inputData[0]) {
      baseImageSetter()
      setFileData(inputData[0])
      console.log(inputData[0])
      setBaseImage('')
      // const formData = new FormData()

      // formData.append('image', inputData[0], 'somename.png')
      // formData.append('name', 'dato')
      // formData.append('surname', 'maluta')
      // formData.append('image', inputData[0])
      // formData.append('_method', 'POST')

      // console.log(formData)

      // sendData(formData)
      dispatch(dispatch(userActions.uploadImage({ avatar: inputData[0] })))
    }
  }, [inputData, dispatch])

  // console.log(fileData)

  return { form, baseImage, fileData, userData }
}

export default useImageInput
