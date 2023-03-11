import { useState, useEffect } from 'react'
import BlogInput from './components/BlogInput'
import blogService from './services/blogs'
import loginService from './services/login'
import AllBlogs from './components/AllBlogs'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)

    }
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogUser')
    setUser(null)
    setErrorMessage(null)
  }
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      window.localStorage.setItem(
        'loggedBlogUser', JSON.stringify(user)
      )
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
  if (user === null) {
    return (<div>
      <Notification className="error" errorMessage={errorMessage} />
      <div>{loginForm()}</div>
    </div>)
  }
  // exercise 5.6
  return (
    <div>
      <h2>blogs</h2>
      <Notification className="success" errorMessage={errorMessage} />
      <p>
        {user.username} logged in <button type="submit" onClick={handleLogout}>logout</button>
      </p>
      <Togglable buttonLabel="new note">
        <BlogInput blogs={blogs} setBlogs={setBlogs} user={user} setErrorMessage={setErrorMessage} />
      </Togglable>
      <AllBlogs blogs={blogs} />

    </div>
  )
}

export default App