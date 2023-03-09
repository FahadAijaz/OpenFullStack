const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb://localhost/bloglist'
mongoose.connect(mongoUrl)

const getAllBlogs =  async () =>  {
    return  Blog.find({})
}

const createBlog = async (blog) => {
    return blog.save()
};
const deleteBlog = async (blogId) => {
    return Blog.deleteOne({_id: blogId})
}

module.exports = {Blog, getAllBlogs, createBlog, deleteBlog}
