import { AxiosResponse } from 'axios';
import { RegisterForm } from 'types';
import axios from './axios';

export const getRegisterRequest = (
  data: RegisterForm
): Promise<AxiosResponse<{}>> => {
  return axios.post('/api/register', data);
};
