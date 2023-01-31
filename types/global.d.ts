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
