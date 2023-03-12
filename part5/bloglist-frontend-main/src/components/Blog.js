import Togglable from "./Togglable"

const Blog = ({ blog }) => {
  
  return (
    <div className="blog" >
      {blog.title} {blog.author}
     <Togglable buttonLabel = "view" cancelButton="hide"> <p>likes:{blog.likes} <button>like</button></p>
      <p>{blog.user ? blog.user.username: null}</p>
      </Togglable>
    </div >
  )
}

export default Blog