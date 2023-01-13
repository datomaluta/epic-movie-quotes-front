import { useDispatch } from 'react-redux';
import { authActions } from 'store';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormValidationSchema } from 'schemas';
import { FormInputs } from './types';

const useSignupModal = () => {
  const dispatch = useDispatch();
  const showLoginFormHandler = () => {
    dispatch(authActions.hideSignupModal());
    dispatch(authActions.showLoginModal());
  };
  const { t } = useTranslation();

  const form = useForm<FormInputs>({
    mode: 'onChange',
    resolver: yupResolver(registerFormValidationSchema),
    defaultValues: { name: '', email: '', password: '', confirm_password: '' },
  });

  const onSubmit = () => {
    // login on submit
  };

  return { showLoginFormHandler, translate: t, form, onSubmit };
};

export default useSignupModal;
