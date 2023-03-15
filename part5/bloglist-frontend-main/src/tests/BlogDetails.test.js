import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogDetails from '../components/BlogDetails'
import '@testing-library/jest-dom/extend-expect'

describe('<BlogDetails />', () => {
    let container
    let handleLike = jest.fn()
    let handleRemoveBlog = jest.fn()
    const blog = { author: 'some person', title: 'some title', url: 'some url', likes: 2 }
    beforeEach(() => {
        container = render(
            <BlogDetails handleLike={handleLike} blog={blog} handleRemoveBlog={handleRemoveBlog} />
        ).container

    })



    test('at start the children are not displayed', () => {
        const div = container.querySelector('.togglableContent')
        expect(div).toHaveStyle('display: none')

    })

    test('after clicking the button, children are displayed', async () => {
        const user = userEvent.setup()
        const button = screen.getByText('view')
        await user.click(button)

        const div = container.querySelector('.togglableContent')
        expect(div).not.toHaveStyle('display: none;')
    })

    test('handleLike is invoked twice', async () => {

        const user = userEvent.setup()
        const button = screen.getByText('view')

        await user.click(button)
        const likeButton = screen.getByRole('button', { name: "like" })
        // expect(handleLike.mock.calls).toHaveLength(0)
        
        
        
        await user.click(likeButton)
        await user.click(likeButton)
        // const div = container.querySelector('.togglableContent')
        expect(handleLike.mock.calls).toHaveLength(2)
    })
})