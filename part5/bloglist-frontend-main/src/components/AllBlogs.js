import blogService from '../services/blogs'
import '../index.css'
import Blog from './Blog'
import { useState } from 'react'
import BlogDetails from './BlogDetails'
import PropTypes from 'prop-types';
import React from 'react'
const AllBlogs = ({ blogs, setBlogs }) => {
    let [changeNumber, setChangeNumber] = useState(0)
    const handleLike = (blog) => async () => {
        const blogId = blog._id
        const likes = blog.likes + 1
        await blogService.updateLikes(blogId, likes)
        blog.likes = likes
        setChangeNumber(changeNumber + 1)
    }
    const handleRemoveBlog = (blogId) => async () => {
        const res = await blogService.deleteBlog(blogId)
        console.log(res)
        blogs = blogs.filter(b => b._id !== blogId)
        setBlogs(blogs)

    }
    return (<div>{blogs.map(blog =>
        <div key={blog._id} className="blog">
            <Blog blog={blog} />
            <BlogDetails handleLike={handleLike} blog={blog} handleRemoveBlog={handleRemoveBlog} />
        </div>
    )}
    </div>
    )
}
AllBlogs.propTypes = {
    blogs: PropTypes.array, setBlogs: PropTypes.func
}
export default AllBlogs