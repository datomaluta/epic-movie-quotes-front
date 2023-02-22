import {
  CameraIcon,
  CloseIcon,
  MovieTextArea,
  MovieTextInput,
} from 'components'
import Image from 'next/image'
import { bigAvatar } from 'public'
import useAddMovieModal from './useAddMovieModal'
import Select from 'react-select'
import { FormProvider } from 'react-hook-form'

const AddMovieModal: React.FC = () => {
  const { userData, addMovieForm, onSubmitHandler } = useAddMovieModal()
  const imageUrl = userData.profile_image_url
    ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${userData.profile_image_url}`
    : bigAvatar
  return (
    <div className='absolute w-full min-h-full top-0 left-0 bottom-0 backdrop-blur-sm '>
      <div className='absolute top-[8rem]  left-1/2 -translate-x-1/2  w-[60.063rem] h-[62.813rem] bg-gradient-dark rounded-xl'>
        <div className='py-6 border-b border-grey-border flex items-center justify-center'>
          <p className='text-2xl text-center font-medium'>Add Movie</p>
          <button className='w-8 h-8 absolute right-8'>
            <CloseIcon />
          </button>
        </div>

        <div className='px-8 mt-8 flex gap-4 items-center'>
          <div className='rounded-full overflow-hidden'>
            <Image
              width={200}
              height={200}
              src={imageUrl}
              alt='profile picture'
              className='w-[3.75rem] h-[3.75rem] object-cover'
            />
          </div>
          <p className='text-xl'>{userData.name}</p>
        </div>

        <FormProvider {...addMovieForm}>
          <form
            onSubmit={addMovieForm.handleSubmit(onSubmitHandler)}
            className='px-8 mt-8'
          >
            <div className='relative mb-5'>
              <MovieTextInput
                name='movie_name_eng'
                placeholder='Movie name'
                locale='Eng'
              />
            </div>

            <div className='relative mb-5'>
              <MovieTextInput
                name='movie_name_ka'
                placeholder='ფილმის სახელი'
                locale='ქარ'
              />
            </div>
            <div className='w-full h-12 border border-light-grey rounded-[0.3rem] mb-5'>
              <label htmlFor='genres'>Genres</label>
              <select name='genres' id='genres' className='bg-gradient-dark'>
                <option value='drama'>Drama</option>
                <option value='horror'>Horror</option>
                <option value='comedy'>Comedy</option>
              </select>
            </div>

            <div className='relative mb-5'>
              <MovieTextInput
                name='director_eng'
                placeholder='Director'
                locale='Eng'
              />
            </div>

            <div className='relative mb-5'>
              <MovieTextInput
                name='director_ka'
                placeholder='რეჟისორი'
                locale='ქარ'
              />
            </div>

            <div className='relative mb-5'>
              <MovieTextArea
                name='description_eng'
                placeholder='Movie description'
                locale='Eng'
              />
            </div>
            <div className='relative mb-8'>
              <MovieTextArea
                name='description_ka'
                placeholder='ფილმის აღწერა'
                locale='ქარ'
              />
            </div>

            <div className='relative mb-5 flex items-center border border-light-grey px-5 py-5'>
              <CameraIcon />
              <label className='ml-3'>Drag & drop your image here or</label>
              <input hidden id='movieImage' type='file' />
              <label
                htmlFor='movieImage'
                className='bg-image-purple px-3 py-2 rounded-sm ml-2'
              >
                Choose file
              </label>
            </div>
            <div className='relative mb-8'>
              <MovieTextInput name='release_date' placeholder='Release date' />
            </div>

            <button className='bg-dark-red w-full rounded-[0.3rem] py-2'>
              Add movie
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default AddMovieModal
