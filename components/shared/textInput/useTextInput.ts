import { useRef, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const useTextInput = (name: string) => {
  const form = useFormContext();
  const { t } = useTranslation();
  const isInValid = form.getFieldState(name).invalid;
  const isDirty = form.getFieldState(name).isDirty;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [passwordFieldType, setPasswordFieldType] = useState('password');

  const passwordShowClickHandler = () => {
    inputRef.current!.type =
      inputRef.current!.type === 'text' ? 'password' : 'text';
    setPasswordFieldType(inputRef.current!.type);
  };

  useWatch({
    name: name,
    control: form.control,
  });

  return {
    form,
    t,
    isInValid,
    isDirty,
    inputRef,
    passwordShowClickHandler,
    passwordFieldType,
  };
};
