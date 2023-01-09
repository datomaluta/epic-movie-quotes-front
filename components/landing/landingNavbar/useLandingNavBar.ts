import { useRouter } from 'next/router';
import { useState } from 'react';
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

  const [languageChanging, setLanguageChanging] = useState<boolean>(false);
  const router = useRouter();

  const showLanguageChanger = () => {
    setLanguageChanging((prevState) => !prevState);
  };

  const setLocaleHandler = (locale: string) => {
    router.push('/', '/', { locale });
    setLanguageChanging(false);
  };

  return {
    showSignupModalHandler,
    showLoginModalHandler,
    languageChanging,
    setLocaleHandler,
    showLanguageChanger,
  };
};

export default useLandingNavBar;
