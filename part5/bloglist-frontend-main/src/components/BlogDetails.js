import Togglable from "./Togglable"

const BlogDetails = ({ handleLike, blog }) => {
    return (<Togglable buttonLabel="view" cancelButton="hide">
        <a href={blog.url}>{blog.url}</a>
        <p>likes:{blog.likes} <button onClick={handleLike(blog)} >like</button></p>
        <p>{blog.user ? blog.user.username : null}</p>
    </Togglable>)
}
export default BlogDetails