import Togglable from "./Togglable"

const BlogDetails = ({ handleLike, blog, handleRemoveBlog }) => {
    return (<Togglable buttonLabel="view" cancelButton="hide">
        <a href={blog.url}>{blog.url}</a>
        <p>likes:{blog.likes} <button onClick={handleLike(blog)} >like</button></p>
        <p>{blog.user ? blog.user.username : null}</p>
        <button onClick={handleRemoveBlog(blog._id)}>remove</button>
    </Togglable>)
}
export default BlogDetails