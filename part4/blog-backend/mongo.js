const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    passwordHash: String,
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Note'
        }
    ],
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('User', userSchema)
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb://localhost/bloglist'
mongoose.connect(mongoUrl)

const getAllBlogs = async () => {
    return Blog.find({})
}

const createBlog = async (blog) => {
    return blog.save()
};
const deleteBlog = async (blogId) => {
    return Blog.deleteOne({_id: blogId})
}
const updateBlog = async (blogId, likes) => {
    return Blog.updateOne({_id: blogId}, {likes: likes})
}

module.exports = {Blog, getAllBlogs, createBlog, deleteBlog, updateBlog, User}
