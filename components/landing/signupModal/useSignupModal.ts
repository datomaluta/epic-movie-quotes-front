import { useDispatch } from 'react-redux';
import { authActions } from 'store';
import { useTranslation } from 'react-i18next';

const useSignupModal = () => {
  const dispatch = useDispatch();
  const showLoginFormHandler = () => {
    dispatch(authActions.hideSignupModal());
    dispatch(authActions.showLoginModal());
  };
  const { t } = useTranslation();

  return { showLoginFormHandler, translate: t };
};

export default useSignupModal;
