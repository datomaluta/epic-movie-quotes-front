import { useDispatch } from 'react-redux';
import { authActions } from 'store';

const useModalWrapper = () => {
  const dispatch = useDispatch();
  const hideModals = () => {
    dispatch(authActions.hideSignupModal());
    dispatch(authActions.hideLoginModal());
    dispatch(authActions.setHideForgotPasswordModal());
    dispatch(authActions.hideConfirmEmailSentModal());
  };

  return { hideModals };
};

export default useModalWrapper;
