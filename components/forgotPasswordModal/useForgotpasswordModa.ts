import { useDispatch } from 'react-redux';
import { authActions } from 'store';

const useForgotPasswordModal = () => {
  const dispatch = useDispatch();

  const backToLoginModal = () => {
    dispatch(authActions.setBackToLoginModal());
  };

  return { backToLoginModal };
};

export default useForgotPasswordModal;
