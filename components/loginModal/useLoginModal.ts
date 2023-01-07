import { useDispatch } from 'react-redux';
import { authActions } from 'store';

const useLoginModal = () => {
  const dispatch = useDispatch();

  const moveToSignupHandler = () => {
    dispatch(authActions.hideLoginModal());
    dispatch(authActions.showSignupModal());
  };

  return { moveToSignupHandler };
};

export default useLoginModal;
