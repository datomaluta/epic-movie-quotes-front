import { useDispatch } from 'react-redux';
import { authActions } from 'store';
import { useTranslation } from 'react-i18next';
import { FormInputs } from './types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormValidationSchema } from 'schemas';

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

  const form = useForm<FormInputs>({
    mode: 'all',
    resolver: yupResolver(loginFormValidationSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = () => {};

  return {
    moveToSignupHandler,
    showForgotPasswordModalHandler,
    translate: t,
    form,
    onSubmit,
  };
};

export default useLoginModal;
