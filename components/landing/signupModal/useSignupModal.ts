import { useDispatch } from 'react-redux';
import { authActions } from 'store';

const useSignupModal = () => {
  const dispatch = useDispatch();
  const showLoginFormHandler = () => {
    dispatch(authActions.hideSignupModal());
    dispatch(authActions.showLoginModal());
  };

  return { showLoginFormHandler };
};

export default useSignupModal;
