export type IndexPropsType = {
  locale: string
}

export type LoginFormFields = {
  email_username: string
  password: string
  rememberMe: boolean
}

export type RegisterFormFields = {
  name: string
  email: string
  password: string
  confirm_password: string
}

export type ForgotPasswordField = {
  email: string
}

export type NewPasswordFormFields = {
  password: string
  confirm_password: string
}

export type NewPasswordMutationParams = {
  token: string
  data: NewPasswordFormFields
}

export type userData = {
  id: number
  name: string
  emails: [
    { id: id; email: string; is_primary: string; email_verified_at: string }
  ]
  has_verified_email: string
  google_id: string
}

export type UpdateUserDataType = {
  name: string
  password: string
}

export type UpdateFormData = {
  name: string
  password: string
  image: string | Blob
}

export type NewEmailType = {
  email: string
}
