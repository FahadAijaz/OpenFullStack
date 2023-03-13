const Like = ({blog}) => {
    
    <p>likes:{blog.likes} <button onClick={handleLike} blogid={blog._id} likes={parseInt(blog.likes) + 1} >like</button></p>
}