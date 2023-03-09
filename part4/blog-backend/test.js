const listHelper = require('./utils/list_helper')
const {blogs} = require('./utils/initialBlogs')
const supertest = require('supertest')
const app = require('./index')
const api = supertest(app)
const {Blog} = require('./mongo')

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })
})

describe('test get all blogs', () => {
    beforeAll(async () => {

        await Blog.insertMany(blogs)
    })
    test('blogs are returned as json', async () => {
        const response = await api
            .get('/api/blogs')
        expect(response.status).toBe(200)
        expect(response.body).toHaveLength(blogs.length)

    })
    test('persons have ids', async () => {
        const response = await api
            .get('/api/blogs')
        expect(response.status).toBe(200)
        const blogsObtained = response.body
        blogsObtained.forEach(j => {
            expect(j).toHaveProperty('_id')
        })


    })
    afterAll(async () => {
        const ids = blogs.map(b => b._id)
        await Blog.deleteMany({_id: {$in: ids}})

    })

})
describe('test create blog', () => {
    const newBlog = {title: "some new blog", author: "some new man", url: "www.google.com", likes: 3}
    test('new blog is created', async () => {
        const response = await api
            .post('/api/blogs')
            .send(newBlog)
        expect(response.status).toBe(200)

        const blogFound = await Blog.find({title: "some new blog"})
        expect(blogFound).toBeDefined()
    })
    afterEach(async () => {
        await Blog.deleteOne({title: newBlog.title})
    })
})
