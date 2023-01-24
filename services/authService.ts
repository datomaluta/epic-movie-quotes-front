import { AxiosResponse } from 'axios'
import { LoginFormFields, RegisterFormFields } from 'types'
import instance from './axios'

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
