import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const useTextInput = (name: string) => {
  const form = useFormContext();
  const { t } = useTranslation();
  const isInValid = form.getFieldState(name).invalid;
  const isDirty = form.getFieldState(name).isDirty;

  return { form, t, isInValid, isDirty };
};
