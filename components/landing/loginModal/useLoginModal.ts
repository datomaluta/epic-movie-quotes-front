import { useDispatch } from 'react-redux';
import { authActions } from 'store';
import { useTranslation } from 'react-i18next';

const useLoginModal = () => {
  const dispatch = useDispatch();

  const moveToSignupHandler = () => {
    dispatch(authActions.hideLoginModal());
    dispatch(authActions.showSignupModal());
  };

  const showForgotPasswordModalHandler = () => {
    dispatch(authActions.setShowForgotPasswordModal());
  };

  const { t } = useTranslation();

  return { moveToSignupHandler, showForgotPasswordModalHandler, translate: t };
};

export default useLoginModal;
