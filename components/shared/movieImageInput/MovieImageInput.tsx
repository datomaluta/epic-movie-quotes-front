import { CameraIcon } from 'components'
import { PropsType } from './types'

import useMovieImageInput from './useMovieImage'

const MovieImageInput: React.FC<PropsType> = (props) => {
  const { form } = useMovieImageInput()
  return (
    <div className='relative mb-5 flex items-center border border-light-grey px-5 py-5 rounded-[0.3rem]'>
      <CameraIcon />
      <label className='ml-3'>Drag & drop your image here or</label>
      <input
        {...form.register(props.name)}
        hidden
        id='movieImage'
        type='file'
      />
      <label
        htmlFor='movieImage'
        className='bg-image-purple px-3 py-2 rounded-sm ml-2'
      >
        Choose file
      </label>
    </div>
  )
}

export default MovieImageInput
