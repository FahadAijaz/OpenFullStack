
import Blog from './Blog'
const AllBlogs = ({blogs}) => {
    return (<div>{blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
    )}</div>
    )
}
export default AllBlogs