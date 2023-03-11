import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const createBlog =  (token, newBlog) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
}
  const request =  axios.post(baseUrl, newBlog, config)
  return request.then(response => response.data)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createBlog }