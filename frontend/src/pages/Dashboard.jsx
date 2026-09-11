import Navbar from "../components/Navbar"
import movies from "../data/movies"

function Dashboard() {

  return (
    <div className="page">

      <Navbar />

      <div className="dashboard">

        <div className="stats-card">
          <h2>Total Movies</h2>
          <p>{movies.length}</p>
        </div>

        <div className="stats-card">
          <h2>Total Bookings</h2>
          <p>1450</p>
        </div>

        <div className="stats-card">
          <h2>Revenue</h2>
          <p>₹4.5L</p>
        </div>

      </div>

    </div>
  )
}

export default Dashboard

