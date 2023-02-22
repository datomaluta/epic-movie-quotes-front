import instance from './axios'

export const getMovies = async () => {
  return await instance.get('/api/movies')
}
