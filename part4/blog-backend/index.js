require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const {getAllBlogs, createBlog, Blog, deleteBlog, updateBlog, User} = require("./mongo");
const jwt = require('jsonwebtoken')
const loginRouter = require("./controllers/login");
const usersRouter = require("./controllers/user");


app.use(cors())
app.use(express.json())
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    } else if (error.name ===  'JsonWebTokenError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
        return authorization.replace('Bearer ', '')
    }
    return null
}

app.get('/api/blogs', async (request, response) => {
    const blogs = await getAllBlogs(response);
    response.json(blogs)
})


app.post('/api/blogs', async (request, response) => {

    const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
    }
    const user = await User.findById(decodedToken.id)
    const blog = new Blog({...request.body, user: user._id})
    const created = await createBlog(blog);
    if(created){
      response.json(blog)
    }
    else{
      response.sendStatus(400)
    }
})

app.patch('/api/blogs/:id', async (req, res) => {
    const blogId = req.params.id
    const likes = req.body.likes
    const updatedBlog = await updateBlog(blogId, likes)
    if (updatedBlog.modifiedCount ==1){
        res.send(200)
    }
    else{
        res.send(404)
    }
})

app.delete('/api/blogs/:id', async (req, res) => {
    const blogId = req.params.id
    const {deletedCount} = await deleteBlog(blogId)
    if (deletedCount == 1){
        res.send(200)
    }
    else{
        res.send(404)
    }
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

module.exports = app
