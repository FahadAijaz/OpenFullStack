import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Togglable from '../components/Togglable'
import BlogDetails from '../components/BlogDetails'
import '@testing-library/jest-dom/extend-expect'

describe('<BlogDetails />', () => {
    let container
    const handleLike = jest.fn()
    const handleRemoveBlog = jest.fn()
    const blog = { author: 'some person', title: 'some title', url: 'some url', likes: 2 }
    beforeEach(() => {
        container = render(
            <BlogDetails handleLike={handleLike} blog={blog} handleRemoveBlog={handleRemoveBlog} />
        ).container

    })


    // test('renders its children', async () => {
    //     await screen.findAllByText('togglable content')
    // })

    test('at start the children are not displayed', () => {
        const div = container.querySelector('.togglableContent')
        screen.debug(div)
        expect(div).toHaveStyle('display: none')

    })

    test('after clicking the button, children are displayed', async () => {
        const user = userEvent.setup()
        const button = screen.getByText('view')
        await user.click(button)

        const div = container.querySelector('.togglableContent')
        expect(div).not.toHaveStyle('display: none;')
    })
})