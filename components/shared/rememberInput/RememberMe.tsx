import useRememberMe from './useRememberMe'
import { PropsType } from './types'

const RememberMe: React.FC<PropsType> = (props) => {
  const { form, checked, inputCheckedHandler } = useRememberMe(props.name)

  return (
    <div>
      <input
        type='checkbox'
        {...(form.register,
        {
          onChange: () => {
            form.setValue('rememberMe', !checked)
            inputCheckedHandler()
          },
        })}
        id='remember'
        className='inline-block mr-2'
      />
      <label htmlFor='remember' className='text-white'>
        {props.translate('remember_me')}
      </label>
    </div>
  )
}

export default RememberMe
