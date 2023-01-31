import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { authWithGoogle } from 'services'

const useGoogleAuth = () => {
  const [googleError, setGoogleError] = useState('')
  const router = useRouter()

  const googleQuery = useQuery('google_url', authWithGoogle)

  const authWithGoogleHandler = async () => {
    if (googleQuery.isSuccess) {
      router.push(googleQuery?.data?.data)
    }
    if (googleQuery.isError) {
      setGoogleError('Something went wrong with google!')
    }
  }

  return { authWithGoogleHandler, googleError }
}

export default useGoogleAuth
