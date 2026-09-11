import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import MovieCard from './MovieCard'

function MovieRow({ title, movies }) {
  return (
    <div className='movie-row'>
      <div className='row-header'>
        <h2>{title}</h2>
        <span>View All</span>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 4
          }
        }}
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieRow

