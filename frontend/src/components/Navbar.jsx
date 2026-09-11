import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">

      <h1 className="logo">🎬 CineHub</h1>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/movies">Movies</Link>

        <Link to="/bookings">Bookings</Link>

        <Link to="/dashboard">Dashboard</Link>

      </div>

    </nav>
  )
}

export default Navbar