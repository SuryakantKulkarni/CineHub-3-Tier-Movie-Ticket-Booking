import Navbar from "../components/Navbar"
import MovieCard from "../components/MovieCard"
import movies from "../data/movies"

function Movies() {

  return (
    <div className="page">

      <Navbar />

      <div className="section">

        <h1>Now Showing</h1>

        <div className="movie-grid">

          {
            movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }

        </div>

      </div>

    </div>
  )
}

export default Movies
