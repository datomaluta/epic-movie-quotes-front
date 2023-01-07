import { PropsType } from './types';

const ModalWrapper: React.FC<PropsType> = (props) => {
  return (
    <div
      className='w-[37.563rem] bg-light-blue sm:bg-signup-gradient  rounded-[0.625rem] absolute top-1/2 left-1/2 -translate-x-1/2
     -translate-y-1/2 flex flex-col items-center py-[3.313rem] sm:w-full sm:h-screen'
    >
      {props.children}
    </div>
  );
};

export default ModalWrapper;
