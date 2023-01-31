import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { authWithGoogle } from 'services'

const useGoogleAuth = () => {
  const [googleError, setGoogleError] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const router = useRouter()

  useQuery('google_url', authWithGoogle, {
    enabled: isClicked,
    onSuccess: (data) => {
      router?.push(data?.data)
    },
    onError: () => {
      setGoogleError('Something went wrong with google!')
    },
  })

  const authWithGoogleHandler = () => {
    setIsClicked(true)
  }

  return { authWithGoogleHandler, googleError }
}

export default useGoogleAuth
