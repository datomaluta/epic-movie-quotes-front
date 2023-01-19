import { useDispatch } from 'react-redux';
import { authActions } from 'store';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormValidationSchema } from 'schemas';
import { FormInputs } from './types';
import { getRegisterRequest } from 'services';
import { useState } from 'react';
import { useMutation } from 'react-query';

const useSignupModal = () => {
  const dispatch = useDispatch();
  const showLoginFormHandler = () => {
    dispatch(authActions.hideSignupModal());
    dispatch(authActions.showLoginModal());
  };

  const { t } = useTranslation();
  const [errors, setErrors] = useState({});

  const form = useForm<FormInputs>({
    mode: 'all',
    resolver: yupResolver(registerFormValidationSchema),
    defaultValues: { name: '', email: '', password: '', confirm_password: '' },
  });

  const { mutate } = useMutation(getRegisterRequest, {
    onSuccess: () => {
      dispatch(authActions.setShowConfirmEmailSendModal());
    },
  });

  const onSubmit = async (data: FormInputs) => {
    mutate(data, {
      onError: (error: any) => {
        setErrors(error?.response?.data?.errors);
      },
    });
  };

  return { showLoginFormHandler, translate: t, form, onSubmit, errors };
};

export default useSignupModal;
