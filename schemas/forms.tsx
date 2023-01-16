import * as Yup from 'yup';

export const registerFormValidationSchema = Yup.object({
  name: Yup.string()
    .required('validations:field_required')
    .min(3, 'validations:field_min_length')
    .max(15, 'validations:field_max_length')
    .matches(/^[a-z0-9]+$/, {
      message: 'validations:only_letters_and_numbers',
    }),

  email: Yup.string()
    .required('validations:field_required')
    .email('validations:email_format'),

  password: Yup.string()
    .required('validations:field_required')
    .min(8, 'validations:password_min_length')
    .max(15, 'validations:field_max_length')
    .matches(/^[a-z0-9]+$/, {
      message: 'validations:only_letters_and_numbers',
    }),

  confirm_password: Yup.string()
    .required('validations:field_required')
    .oneOf([Yup.ref('password')], 'validations:password_does_not_match'),
});

export const loginFormValidationSchema = Yup.object({
  email_username: Yup.string()
    .required('validations:field_required')
    .min(3, 'validations:field_min_length'),
  password: Yup.string().required('validations:field_required'),
});
