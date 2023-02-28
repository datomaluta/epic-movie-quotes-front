import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { addMovieValidationSchema } from 'schemas'
import { getMovies, getUserData } from 'services'
import { userActions } from 'store'

const useMovie = () => {
  //   const queryClient = useQueryClient()
  //   queryClient.invalidateQueries('userData')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const [addingMovie, setAddingMovie] = useState(false)

  // const addMovieForm = useForm({
  //   mode: 'all',
  //   resolver: yupResolver(addMovieValidationSchema),
  //   defaultValues: {
  //     movie_name_eng: '',
  //     movie_name_ka: '',
  //     director_eng: '',
  //     director_ka: '',
  //     description_eng: '',
  //     description_ka: '',
  //     thumbnail: '',
  //   },
  // })

  const userQuery = useQuery('userData', getUserData, {
    onSuccess: (data) => {
      dispatch(userActions.setUserData({ userData: data?.data.user }))
    },
    onError: () => {
      setError('Something went wrong with fetching!')
    },
  })

  const getMoviesData = async () => {
    const response = await getMovies()
    console.log(response)
  }

  useEffect(() => {
    getMoviesData()
  }, [])

  const addingMovieHandler = (param: boolean) => {
    setAddingMovie(param)
  }

  return { userQuery, addingMovie, addingMovieHandler }
}

export default useMovie
