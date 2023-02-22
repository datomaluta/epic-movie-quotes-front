import * as Yup from 'yup'

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
})

export const loginFormValidationSchema = Yup.object({
  email_username: Yup.string()
    .required('validations:field_required')
    .min(3, 'validations:field_min_length'),
  password: Yup.string()
    .required('validations:field_required')
    .min(3, 'validations:field_min_length'),
})

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .required('validations:field_required')
    .email('validations:email_format'),
})

export const newPasswordValidationSchema = Yup.object({
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
})

export const newUserNameValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'validations:field_min_length')
    .max(15, 'validations:field_max_length')
    .matches(/^[a-z0-9]+$/, {
      message: 'validations:only_letters_and_numbers',
    }),
})

export const updatePasswordValidationSchema = Yup.object({
  password: Yup.string()
    .min(8, 'validations:password_min_length')
    .max(15, 'validations:field_max_length')
    .matches(/^[a-z0-9]+$/, {
      message: 'validations:only_letters_and_numbers',
    }),
})

export const addMovieValidationSchema = Yup.object({
  movie_name_eng: Yup.string()
    .required('validations:field_required')
    .matches(/^[a-zA-Z0-9]+$/, {
      message: 'validations:only_letters_and_numbers',
    }),
  movie_name_ka: Yup.string()
    .required('validations:field_required')
    .matches(/^[ა-ჰ0-9]+$/, {
      message: 'validations:only_georgian_letters_and_numbers',
    }),
  director_eng: Yup.string()
    .required('validations:field_required')
    .matches(/^[a-zA-Z]+$/, {
      message: 'validations:only_english_letters',
    }),
  director_ka: Yup.string()
    .required('validations:field_required')
    .matches(/^[ა-ჰ]+$/, {
      message: 'validations:only_georgian_letters',
    }),

  description_eng: Yup.string().required('validations:field_required'),
  description_ka: Yup.string().required('validations:field_required'),
  release_date: Yup.number().required('validations:field_required'),
})
