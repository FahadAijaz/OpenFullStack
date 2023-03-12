import { useState } from 'react'
import blogService from '../services/blogs'
const BlogInput = ({ blogs, setBlogs, user, setErrorMessage }) => {
    let [title, setTitle] = useState(null)
    let [author, setAuthor] = useState(null)
    let [url, setUrl] = useState(null)
    const handleCreate = async (event) => {
        event.preventDefault()
        const newBlog = {
            title: title,
            author: author,
            url: url
        }

        
        const createdBlog = await blogService.createBlog(user.token, newBlog)
        blogs.push(createdBlog)
        const newBlogs = [...blogs]
        setBlogs(newBlogs)
        console.log('hello', createdBlog)
        setErrorMessage(`a new blog ${title} by ${author} added`)
    }
    return (<div>
        <form onSubmit={handleCreate}>
            <div>
                Title:
                <input type="text" name="title" value={title} onChange={({ target }) => setTitle(target.value)} />
            </div>
            <div>
                Author:
                <input type="text" name="author" value={author} onChange={({ target }) => setAuthor(target.value)} />
            </div>
            <div>
                URL:
                <input type="text" name="url" value={url} onChange={({ target }) => setUrl(target.value)} />
            </div>
            <button type="submit">create</button>
        </form>
    </div>)
}
export default BlogInput