import { useFormContext } from 'react-hook-form'

const useMovieImageInput = () => {
  const form = useFormContext()

  return { form }
}

export default useMovieImageInput
