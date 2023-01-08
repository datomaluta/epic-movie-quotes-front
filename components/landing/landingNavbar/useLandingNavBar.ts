import { useDispatch } from 'react-redux';
import { authActions } from 'store';

const useLandingNavBar = () => {
  const dispatch = useDispatch();
  const showSignupModalHandler = () => {
    dispatch(authActions.showSignupModal());
  };
  const showLoginModalHandler = () => {
    dispatch(authActions.showLoginModal());
  };

  return { showSignupModalHandler, showLoginModalHandler };
};

export default useLandingNavBar;
