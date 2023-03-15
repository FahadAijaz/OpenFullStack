import React from 'react'
import Togglable from "./Togglable"
import PropTypes from 'prop-types'
const BlogDetails = ({ handleLike, blog, handleRemoveBlog }) => {
    return (<Togglable buttonLabel="view" cancelButton="hide">
            <a href={blog.url}>{blog.url}</a>
            <p>likes:{blog.likes} <button onClick={() => handleLike()} >like</button></p>
            <p>{blog.user ? blog.user.username : null}</p>
            <button onClick={handleRemoveBlog(blog._id)}>remove</button>
    </Togglable>)
}
BlogDetails.propTypes = {
    handleLike: PropTypes.func,
    blog: PropTypes.object,
    handleRemoveBlog: PropTypes.func
}
export default BlogDetails