import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'store';
import { useTranslation } from 'react-i18next';

const useLandingNavBar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const showSignupModalHandler = () => {
    dispatch(authActions.showSignupModal());
  };
  const showLoginModalHandler = () => {
    dispatch(authActions.showLoginModal());
  };

  const [languageChanging, setLanguageChanging] = useState(false);
  const { replace, pathname } = useRouter();

  const showLanguageChanger = () => {
    setLanguageChanging((prevState) => !prevState);
  };

  const setLocaleHandler = (language: string) => {
    replace(pathname, pathname, { locale: language });
    setLanguageChanging(false);
  };

  return {
    showSignupModalHandler,
    showLoginModalHandler,
    languageChanging,
    setLocaleHandler,
    showLanguageChanger,
    t,
    router,
  };
};

export default useLandingNavBar;
