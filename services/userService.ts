import { NewEmailType, UpdateFormData } from 'types'
import instance from './axios'

export const getUserData = async () => {
  return await instance.get('/api/userdata')
}

export const updateUserData = async (data: UpdateFormData) => {
  return await instance.post(`/api/user-data/update`, data)
}

export const addNewEmail = async (data: NewEmailType) => {
  return await instance.post('/api/add-email', data)
}

export const makeEmailPrimary = async (id: string) => {
  return await instance.get(`/api/make-primary/${id}`)
}

export const deleteEmail = async (id: string) => {
  return await instance.get(`/api/delete-email/${id}`)
}
