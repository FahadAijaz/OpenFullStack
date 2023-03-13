import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    console.log(response.data);
    return response.data
  })
}
const createBlog = (token, newBlog) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const request = axios.post(baseUrl, newBlog, config)
  return request.then(response => response.data)
}

const updateLikes = async (blogId, likes) => {
  console.log(likes)
  const request = await axios.patch(baseUrl+`/${blogId}`, {likes: likes})
  return request.data
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createBlog, updateLikes }