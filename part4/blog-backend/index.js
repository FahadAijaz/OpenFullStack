const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const {getAllBlogs, createBlog, Blog, deleteBlog} = require("./mongo");


app.use(cors())
app.use(express.json())


app.get('/api/blogs', async (request, response) => {
    const blogs = await getAllBlogs(response);
    response.json(blogs)
})


app.post('/api/blogs', async (request, response) => {
    const blog = new Blog(request.body)
    const created = await createBlog(blog);
    if(created){
      response.json(blog)
    }
    else{
      response.sendStatus(400)
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
