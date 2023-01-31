import { AxiosResponse } from 'axios'
import { i18n } from 'next-i18next'
import {
  ForgotPasswordField,
  LoginFormFields,
  NewPasswordMutationParams,
  RegisterFormFields,
} from 'types'
import instance from './axios'

instance.interceptors.request.use(function (config) {
  config.headers['Accept-Language'] = i18n?.language
  return config
})

export const getRegisterRequest = (
  data: RegisterFormFields
): Promise<AxiosResponse<{}>> => {
  return instance.post('/api/register', data)
}

export const getEmailVerifyRequest = (url: string) => {
  return instance.get(`/api/${url}`)
}

export const fetchCSRFToken = async () => {
  return await instance.get('/sanctum/csrf-cookie')
}

export const login = async (data: LoginFormFields) => {
  return await instance.post('/api/login', data)
}

export const logout = async () => {
  return await instance.get('/api/logout')
}

export const sendPasswordResetEmail = async (data: ForgotPasswordField) => {
  return await instance.post('/api/forget-password', data)
}

export const getNewPasswordRequest = async ({
  token,
  data,
}: NewPasswordMutationParams) => {
  return await instance.post(`/api/reset-password/${token}`, data)
}

export const authWithGoogle = async () => {
  return await instance.get('/api/auth/google')
}
