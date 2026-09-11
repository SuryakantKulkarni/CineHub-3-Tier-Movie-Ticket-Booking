import { useNavigate } from "react-router-dom"

function MovieCard({ movie }) {

  const navigate = useNavigate()

  return (

  <div className="movie-card">

    <img src={movie.image} alt={movie.title} />

    <div className="movie-info">

      <h3>{movie.title}</h3>

      <p>{movie.language}</p>

      <div className="movie-meta">

        <span>⭐ {movie.rating}</span>
        <span>{movie.duration}</span>

      </div>

      <button
  onClick={() => navigate(`/bookings/${movie.id}`)}
>
  Get Ticket
</button>

    </div>

  </div>
  )
}

export default MovieCard
