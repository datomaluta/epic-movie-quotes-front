import { Back, BackdropWrapper, ModalWrapper, TextInput } from 'components';
import useForgotPasswordModal from './useForgotpasswordModa';

const ForgotPasswordModal: React.FC = () => {
  const { backToLoginModal } = useForgotPasswordModal();
  return (
    <BackdropWrapper>
      <ModalWrapper>
        <h1 className='text-white text-[2rem] sm:text-2xl font-medium mb-3'>
          Forgot password?
        </h1>
        <p className='text-light-grey mb-6 text-center'>
          Enter the email and we’ll send an email with <br /> instructions to
          reset your password
        </p>
        <form>
          <TextInput
            label='Email'
            type='email'
            placeholder='Enter Your Email'
          />

          <button className='bg-dark-red py-2 text-white w-[22.5rem] rounded mt-2'>
            Send Instructions
          </button>

          <button
            type='button'
            className='flex items-center mt-8 mx-auto gap-3'
            onClick={backToLoginModal}
          >
            <Back />
            <span className='text-light-grey'>Back to log in</span>
          </button>
        </form>
      </ModalWrapper>
    </BackdropWrapper>
  );
};

export default ForgotPasswordModal;
