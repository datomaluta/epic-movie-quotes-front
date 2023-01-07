import { PropsType } from './types';

const TextInput: React.FC<PropsType> = (props) => {
  return (
    <div className='mb-4'>
      <label className='text-white mb-2 block'>
        {props.label}
        <span className='text-red-danger inline-block ml-1'>*</span>
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className='py-2 px-3 w-[22.5rem] block placeholder:text-light-grey rounded bg-very-light-grey outline-none border border-transparent focus:border-blue-500'
      />
    </div>
  );
};

export default TextInput;
