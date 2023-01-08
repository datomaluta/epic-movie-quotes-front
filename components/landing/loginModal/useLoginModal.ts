import { useDispatch } from 'react-redux';
import { authActions } from 'store';

const useLoginModal = () => {
  const dispatch = useDispatch();

  const moveToSignupHandler = () => {
    dispatch(authActions.hideLoginModal());
    dispatch(authActions.showSignupModal());
  };

  const showForgotPasswordModalHandler = () => {
    dispatch(authActions.setShowForgotPasswordModal());
  };

  return { moveToSignupHandler, showForgotPasswordModalHandler };
};

export default useLoginModal;
