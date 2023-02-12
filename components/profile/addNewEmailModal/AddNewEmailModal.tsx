import { ProfileTextInput } from 'components/shared/profileTextInput'
import { FormProvider } from 'react-hook-form'
import { PropsType } from './types'
import useAddNewEmailModal from './useAddNewEmailModal'

const AddNewEmailModal: React.FC<PropsType> = (props) => {
  const { newEmailForm, onSubmit } = useAddNewEmailModal({
    showOrHideModal: props.showOrHideEmailModal,
  })
  return (
    <div className='bg-new-email transition-all bg-opacity-40 backdrop-blur-sm w-full h-full absolute top-0 left-0 z-20'>
      <div className='bg-profile-dark-blue rounded-xl w-[38.438rem] h-[22.938rem] fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 py-6'>
        <p className='text-2xl border-b border-very-light-grey pb-6 px-8'>
          Add new Email
        </p>
        <div className='mt-[3.688rem] px-[3.438rem]'>
          <label className='block'>New Email</label>
          <FormProvider {...newEmailForm}>
            <form onSubmit={newEmailForm.handleSubmit(onSubmit)}>
              <ProfileTextInput name='email' placeholder='Enter new email' />
              <div className='mt-[3.688rem] flex gap-[2.063rem] px-8 justify-end'>
                <button
                  onClick={() => props.showOrHideEmailModal(false)}
                  className='text-xl'
                  type='button'
                >
                  Cancel
                </button>
                <button className='bg-error-red-border py-[0.563rem] px-[1.063rem] rounded-[0.3rem] text-xl '>
                  Add
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default AddNewEmailModal
