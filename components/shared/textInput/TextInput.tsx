import { PropsType } from './types';
import { useTextInput } from './useTextInput';
import { ErrorMessage } from '@hookform/error-message';
import { InputCorrectIcon, InputErrorIcon } from 'components';

const TextInput: React.FC<PropsType> = (props) => {
  const { form, t, isInValid, isDirty } = useTextInput(props.name);

  return (
    <div className='mb-4'>
      <label className='text-white mb-2 block'>
        {props.label}
        <span className='text-red-danger inline-block ml-1'>*</span>
      </label>
      <div className='relative'>
        <input
          {...form.register(props.name)}
          type={props.type}
          placeholder={props.placeholder}
          className={`${
            isInValid ? 'border-error-red-border' : 'border-transparent'
          } ${
            !isInValid && isDirty && 'border-success-green'
          } py-2 px-3 w-[22.5rem] block placeholder:text-light-grey rounded
          bg-very-light-grey outline-none border-2 focus:border-focus-blue`}
        />
        {isInValid && (
          <div className='absolute top-1/2 right-4 -translate-y-1/2'>
            <InputErrorIcon />
          </div>
        )}
        {!isInValid && isDirty && (
          <div className='absolute top-1/2 right-4 -translate-y-1/2'>
            <InputCorrectIcon />
          </div>
        )}
      </div>

      <div className='text-error-red text-sm h-2 mt-1'>
        <ErrorMessage
          errors={form.formState.errors}
          name={props.name}
          render={({ message }) => <p>{t(message)}</p>}
        />
      </div>
    </div>
  );
};

export default TextInput;
