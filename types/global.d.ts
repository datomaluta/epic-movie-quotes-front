import { Dispatch, SetStateAction } from 'react'

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

export type UserData = {
  id: number
  name: string
  emails: [
    { id: number; email: string; is_primary: number; email_verified_at: string }
  ]
  has_verified_email: number
  google_id: string
  profile_image_url: string
  profile_image_file: string
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

export type SetState<T> = Dispatch<SetStateAction<T>>

export type BackArrowIconType = {
  width?: string
  height?: string
}
