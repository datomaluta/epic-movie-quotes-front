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
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      {
        message: 'validations:email_format',
      }
    ),
  password: Yup.string()
    .required('validations:field_required')
    .min(8, 'validations:password_min_length')
    .max(15, 'validations:field_max_length')
    .matches(/^[a-z0-9]+$/, {
      message: 'validations:only_letters_and_numbers',
    }),

  confirm_password: Yup.string()
    .required('validations:field_required')
    .min(8, 'validations:password_min_length')
    .max(15, 'validations:field_max_length')
    .oneOf([Yup.ref('password')], 'validations:password_does_not_match'),
});
