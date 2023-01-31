import { CloseIcon } from 'components'
import { PropsType } from './types'
import useModalWrapper from './useModalWrapper'

const ModalWrapper: React.FC<PropsType> = (props) => {
  const { router } = useModalWrapper()
  return (
    <div
      className={`w-[37.563rem] bg-light-blue sm:bg-signup-gradient  rounded-[0.625rem] absolute top-1/2 left-1/2 -translate-x-1/2
     -translate-y-1/2 flex flex-col items-center py-[3.313rem] sm:w-full sm:h-screen ${
       router.locale === 'en' ? 'font-helvetica-en' : 'font-helvetica-geo'
     }`}
    >
      {props.onClose && (
        <button
          type='button'
          className='text-white w-8 h-8 absolute left-4 top-4 hidden sm:block'
          onClick={props.onClose}
        >
          <CloseIcon />
        </button>
      )}
      {props.children}
    </div>
  )
}

export default ModalWrapper
