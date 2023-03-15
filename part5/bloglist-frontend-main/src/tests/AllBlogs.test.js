import BlogInput from '../components/BlogInput'
import React from 'react'
import blogService from '../services/blogs'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'



describe('<All blogs />', () => {
    let container

    const blog = { author: 'new author', title: 'new title', url: 'new url', likes: 2 }
    const blogs = [blog]
    let setBlogs = jest.fn()
    const user = { username: 'new user' }
    let setErrorMessage = jest.fn()

    const mockCreateBlog = jest.spyOn(blogService, 'createBlog');
    mockCreateBlog.mockResolvedValue(blog);
    beforeEach(() => {
        container = render(
            <BlogInput blogs={blogs} setBlogs={setBlogs} user={user} setErrorMessage={setErrorMessage} />
        ).container
    })

    test('new blog is created', async () => {

        const createNote = jest.fn()
        const user = userEvent.setup()
        const textBoxes = screen.getAllByRole('textbox')
        const inputTitle = textBoxes[0]
        const inputAuthor = textBoxes[1]

        const inputURL = textBoxes[2]

        const sendButton = screen.getByText('create')

        await user.type(inputAuthor, 'new author')
        await user.type(inputTitle, 'new title')
        await user.type(inputURL, 'new url')
        await user.click(sendButton)

        expect(setBlogs.mock.calls).toHaveLength(1)
        expect(setBlogs.mock.calls[0][0][0].author).toBe('new author')
        expect(setBlogs.mock.calls[0][0][0].title).toBe('new title')
        expect(setBlogs.mock.calls[0][0][0].url).toBe('new url')
    })
})