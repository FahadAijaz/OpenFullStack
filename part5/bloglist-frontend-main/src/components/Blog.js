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
     {/* <Togglable buttonLabel = "view" cancelButton="hide"> 
     <a href={blog.url}>{blog.url}</a>
     <p>likes:{blog.likes} <button onClick={handleLike} blogid={blog._id} likes={parseInt(blog.likes) + 1} >like</button></p>
      <p>{blog.user ? blog.user.username: null}</p>
      </Togglable> */}
    </div >
  )
}

export default Blog