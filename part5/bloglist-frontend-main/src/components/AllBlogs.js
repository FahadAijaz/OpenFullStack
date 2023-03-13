import blogService from '../services/blogs'
import Togglable from "./Togglable"
import '../index.css'
import Blog from './Blog'
import { useState } from 'react'
import BlogDetails from './BlogDetails'
const AllBlogs = ({ blogs }) => {
    let [changeNumber, setChangeNumber] = useState(0)
    const handleLike = (blog) =>  async(event) => {
        const blogId = blog._id
        const likes = blog.likes + 1
        await blogService.updateLikes(blogId, likes)
        blog.likes = likes
        setChangeNumber(changeNumber + 1)
      }
    return (<div>{blogs.map(blog =>
        <div className="blog">
            <Blog key={blog.id} blog={blog} />
            <BlogDetails handleLike={handleLike} blog={blog} />
        </div>
    )}
    </div>
    )
}
export default AllBlogs