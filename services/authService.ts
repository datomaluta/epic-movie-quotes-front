import { AxiosResponse } from 'axios'
import { RegisterForm } from 'types'
import { LoginForm } from 'types/loginFormFields'
import instance from './axios'
import axios from './axios'

export const getRegisterRequest = (
  data: RegisterForm
): Promise<AxiosResponse<{}>> => {
  return instance.post('/api/register', data)
}

export const getEmailVerifyRequest = (url: string) => {
  return axios.get(`/api/${url}`)
}

export const fetchCSRFToken = async () => {
  const response = await instance.get('/sanctum/csrf-cookie')
  return response
}

export const login = async (data: LoginForm) => {
  const response = await instance.post('/api/login', data)
  return response
}

export const logout = async () => {
  const response = await instance.get('/api/logout')
  return response
}
