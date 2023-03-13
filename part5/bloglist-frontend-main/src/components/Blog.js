import Togglable from "./Togglable"
import blogService from '../services/blogs'

const Blog = ({ blog }) => {
  const handleLike = async(event) => {
    const blogId = event.target.getAttribute("blogid")
    const likes = parseInt(event.target.getAttribute("likes"))
    console.log(blogId, likes)
    await blogService.updateLikes(blogId, likes)
    blog.likes = likes
    blog = {...blog}
  }
  return (
    <div >
      {blog.title} {blog.author}
    </div >
  )
}

export default Blog