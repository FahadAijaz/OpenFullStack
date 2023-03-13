import blogService from '../services/blogs'
import Togglable from "./Togglable"
import '../index.css'
import Blog from './Blog'
import { useState } from 'react'
import BlogDetails from './BlogDetails'
const AllBlogs = ({ blogs, setBlogs }) => {
    let [changeNumber, setChangeNumber] = useState(0)
    const handleLike = (blog) =>  async(event) => {
        const blogId = blog._id
        const likes = blog.likes + 1
        await blogService.updateLikes(blogId, likes)
        blog.likes = likes
        setChangeNumber(changeNumber + 1)
      }
    const handleRemoveBlog = (blogId) => async(event) => {
        const res = await blogService.deleteBlog(blogId)
        console.log(res)
        blogs = blogs.filter(b => b._id !== blogId)
        setBlogs(blogs)
        
    }
    return (<div>{blogs.map(blog =>
        <div className="blog">
            <Blog key={blog._id} blog={blog} />
            <BlogDetails handleLike={handleLike} blog={blog} handleRemoveBlog={handleRemoveBlog}/>
        </div>
    )}
    </div>
    )
}
export default AllBlogs