import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    // 'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data',
    // referer: 'http://localhost:3000',
  },
  withCredentials: true,
})

export default instance
