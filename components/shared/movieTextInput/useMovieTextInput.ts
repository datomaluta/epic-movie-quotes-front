import { useFormContext } from 'react-hook-form'

const useMovieTextInput = () => {
  const form = useFormContext()

  return { form }
}

export default useMovieTextInput
