import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from 'services'
import { RootState } from 'store'
import { userActions } from 'store/user/userSlice'

const useNewsFeed = () => {
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const userData = useSelector((state: RootState) => state.user)

  const userQuery = useQuery('userData', getUserData, {
    onSuccess: (data) => {
      dispatch(userActions.setUserData({ userData: data?.data.user }))
    },
    onError: () => {
      setError('Something went wrong with fetching!')
    },
  })

  return { userData, error, t, userQuery}
}

export default useNewsFeed
