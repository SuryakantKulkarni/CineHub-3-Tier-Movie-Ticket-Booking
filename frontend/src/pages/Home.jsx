import Navbar from "../components/Navbar"
import HeroBanner from "../components/HeroBanner"
import MovieCard from "../components/MovieCard"

import movies from "../data/movies"

function Home() {

  const englishMovies =
    movies.filter(movie => movie.language === "English")

  const hindiMovies =
    movies.filter(movie => movie.language === "Hindi")

  const marathiMovies =
    movies.filter(movie => movie.language === "Marathi")

  return (

    <div className="page" id="home">

      <Navbar />

      <HeroBanner />

      <div className="section" id="movies">

        <h2>English Blockbusters</h2>

        <div className="movie-row">

          {
            englishMovies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))
          }

        </div>

      </div>

      <div className="section">

        <h2>Hindi Trending</h2>

        <div className="movie-row">

          {
            hindiMovies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))
          }

        </div>

      </div>

      <div className="section">

        <h2>Marathi Cinema</h2>

        <div className="movie-row">

          {
            marathiMovies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))
          }

        </div>

      </div>

    </div>

  )
}

export default Home