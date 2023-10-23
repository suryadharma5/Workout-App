import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to={'/'}>
            <h1> Workout Body</h1>
        </Link>

        <nav>
          <div>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
