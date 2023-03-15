import React, { useState } from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types';

const BlogInput = ({ blogs, setBlogs, user, setErrorMessage }) => {
    let [title, setTitle] = useState('')
    let [author, setAuthor] = useState('')
    let [url, setUrl] = useState('')
    const handleCreate = async (event) => {
        event.preventDefault()
        const newBlog = {
            title: title,
            author: author,
            url: url
        }


        const createdBlog = await blogService.createBlog(user.token, newBlog)
        const newBlogs = [...blogs, createdBlog]
        setBlogs(newBlogs)
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
BlogInput.propTypes = {
    blogs: PropTypes.array,
    setBlogs: PropTypes.func,
    user: PropTypes.object,
    setErrorMessage: PropTypes.func
}
export default BlogInput