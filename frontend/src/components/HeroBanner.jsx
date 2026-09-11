import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import movies from "../data/movies"

function HeroBanner() {

  const [current, setCurrent] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent(prev =>
        prev === movies.length - 1
        ? 0
        : prev + 1
      )

    }, 8000)

    return () => clearInterval(interval)

  }, [])

  const movie = movies[current]

  return (

    <div
      className="hero-banner"
      style={{
        backgroundImage: `url(${movie.banner})`
      }}
    >

      <div className="overlay">

        <h1>{movie.title}</h1>

        <p>
          Experience premium cinema booking
          with CineHub.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() =>
              navigate(`/bookings/${movie.id}`)
            }
          >
            Get Tickets
          </button>

        </div>

      </div>

    </div>

  )

}

export default HeroBanner