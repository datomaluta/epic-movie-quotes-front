import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const useAddMovieModal = () => {
  const userData = useSelector((state: RootState) => state.user)

  const addMovieForm = useForm({
    mode: 'all',
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

  const onSubmitHandler = async () => {}

  return { userData, addMovieForm, onSubmitHandler }
}

export default useAddMovieModal
