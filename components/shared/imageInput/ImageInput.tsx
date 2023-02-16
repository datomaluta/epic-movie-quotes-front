import Image from 'next/image'
import useImageInput from './useImageInput'
import { bigAvatar } from 'public'
import { PropsType } from './types'

const ImageInput: React.FC<PropsType> = (props) => {
  const { form, baseImage, userData } = useImageInput(props.name)

  return (
    <div className='mb-10 flex flex-col items-center'>
      <input
        id={props.name}
        draggable
        {...form.register(props.name)}
        type='file'
        hidden
      />

      {baseImage && (
        <div className='w-[11.75rem] h-[11.75rem] rounded-full overflow-hidden'>
          <img
            src={baseImage}
            alt='avatar'
            className='h-full w-full object-cover'
          />
        </div>
      )}
      {!baseImage && userData.profile_image_url && (
        <div className='w-[11.75rem] h-[11.75rem] rounded-full overflow-hidden'>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${userData.profile_image_url}`}
            alt='big profile picture'
            width={400}
            height={400}
            className='object-cover h-full w-full'
          />
        </div>
      )}
      {!userData.profile_image_url && !baseImage && (
        <div className='w-[11.75rem] h-[11.75rem] rounded-full overflow-hidden'>
          <Image src={bigAvatar} alt='avatar' />
        </div>
      )}
      <label htmlFor={props.name} className='block mt-4 cursor-pointer'>
        Upload new photo
      </label>
    </div>
  )
}

export default ImageInput
