import { useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from 'services'
import { RootState } from 'store'
import { userActions } from 'store/user/userSlice'

const useNewsFeed = () => {
  // const [userData, setUserData] = useState({})
  // const fetchHandler = async () => {
  //   const response = await getUserData()

  //   setUserData(response.data.user)
  // }
  // const userQuery = useQuery('userData', getUserData)
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const userData = useSelector((state: RootState) => state.user)

  useQuery('userData', getUserData, {
    onSuccess: (data) => {
      dispatch(userActions.setUserData({ userData: data?.data.user }))
    },
    onError: () => {
      setError('Something went wrong with fetching!')
    },
  })

  return { userData, error }
}

export default useNewsFeed
