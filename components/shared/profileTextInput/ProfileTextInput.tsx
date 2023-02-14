import { ErrorMessage } from '@hookform/error-message'
import { PropsType } from './types'
import useProfileTextInput from './useProfileTextInput'

const ProfileTextInput: React.FC<PropsType> = (props) => {
  const { form } = useProfileTextInput(props.name)

  return (
    <>
      <label className='block mb-2'>{props.label}</label>
      <input
        {...form.register(props.name)}
        type={props.type}
        placeholder={props.placeholder}
        className='w-[33rem] block bg-very-light-grey text-input-black px-[1.063rem] py-[0.563rem] rounded-[0.3rem] placeholder:text-gradient-dark'
      />

      <div className={`text-error-red text-sm mt-1 h-1 `}>
        <ErrorMessage
          errors={form.formState.errors}
          name={props.name}
          render={({ message }) => <p>{message}</p>}
        />
      </div>
      <p className='text-error-red text-sm mt-4'>{props.error}</p>
    </>
  )
}

export default ProfileTextInput
