import { PropsType } from './types'

const showConfirmChangesModal: React.FC<PropsType> = (props) => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 z-50 '>
      <div className='w-full h-full bg-confirm-changes bg-opacity-70 backdrop-blur-sm'></div>
      <div className='rounded-[0.625rem] px-8 w-[22.75rem] h-[13.188rem] absolute top-36 left-1/2 -translate-x-1/2 bg-email-modal'>
        <p className='text-center mt-16 pb-11 border-b border-grey-border mb-6'>
          Are you sure to make changes?
        </p>
        <div className='flex justify-between'>
          <button>Cancel</button>
          <button
            onClick={props.onClick}
            className='bg-dark-red px-4 py-2 rounded'
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default showConfirmChangesModal
