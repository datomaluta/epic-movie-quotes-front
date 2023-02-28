import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { addMovieValidationSchema } from 'schemas'
import { RootState } from 'store'

const useAddMovieModal = () => {
  const userData = useSelector((state: RootState) => state.user)
  console.log(userData)

  const addMovieForm = useForm({
    mode: 'all',
    // resolver: yupResolver(addMovieValidationSchema),
    defaultValues: {
      movie_name_eng: '',
      movie_name_ka: '',
      director_eng: '',
      director_ka: '',
      description_eng: '',
      description_ka: '',
      thumbnail: '',
    },
  })

  const onSubmitHandler = async (data) => {
    console.log('clicked')
    console.log(data)
  }

  return { userData, addMovieForm, onSubmitHandler }
}

export default useAddMovieModal
