import { useFormContext } from 'react-hook-form'

const useMovieTextArea = () => {
  const form = useFormContext()

  return { form }
}

export default useMovieTextArea
