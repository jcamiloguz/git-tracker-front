import axios from 'axios'

export interface IResponse<T> {
  data: T
  status: number
  message?: string
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    'Content-type': 'application/json',
  },
})
