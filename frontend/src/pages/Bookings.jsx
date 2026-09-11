import { useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import movies from "../data/movies"
import {
  createBooking
}
from "../services/BookingService"

function Bookings() {

  const navigate = useNavigate()

  const { id } = useParams()

  const movie =
    movies.find(m => m.id == id) || movies[0]

  const [selectedSeats, setSelectedSeats] = useState([])

  const [selectedTime, setSelectedTime] = useState("")

  const [selectedTheater, setSelectedTheater] = useState("")

  const [selectedDate, setSelectedDate] = useState("")

  const [customerName, setCustomerName] = useState("")

  const seats = [

    "A1","A2","A3","A4","A5","A6","A7","A8",

    "B1","B2","B3","B4","B5","B6","B7","B8",

    "C1","C2","C3","C4","C5","C6","C7","C8",

    "D1","D2","D3","D4","D5","D6","D7","D8"

  ]

  const handleSeat = (seat) => {

    if(selectedSeats.includes(seat)) {

      setSelectedSeats(
        selectedSeats.filter(s => s !== seat)
      )

    } else {

      setSelectedSeats([
        ...selectedSeats,
        seat
      ])

    }

  }

  const confirmBooking = () => {

    if(selectedSeats.length === 0){

      alert("Please select seats")

      return
    }

    if(!selectedTime){

      alert("Please select show timing")

      return
    }

    if(!selectedTheater){

      alert("Please select theatre")

      return
    }

    if(!selectedDate){

      alert("Please select date")

      return
    }

    if(!customerName){

      alert("Please enter your name")

      return
    }

    const bookingData = {

  movie: movie.title,

  seats: selectedSeats,

  timing: selectedTime,

  theater: selectedTheater,

  date: selectedDate,

  customer: customerName,

  poster: movie.image

}

localStorage.setItem(

  "cinehub-booking",

  JSON.stringify(bookingData)

) 

createBooking({

  customerName,

  movieName: movie.title,

  theaterName: selectedTheater,

  showDate: selectedDate,

  showTime: selectedTime,

  seatType: "Premium",

  ticketCount:
    selectedSeats.length,

  bookingStatus: "CONFIRMED"

})

.then(() => {

  console.log("Booking Saved")

})

.catch((err) => {

  console.log(err)

})


    navigate("/success", {

      state: {

        movie: movie.title,

        seats: selectedSeats,

        timing: selectedTime,

        theater: selectedTheater,

        date: selectedDate,

        customer: customerName,

        poster: movie.image

      }

    })

  }

  return (

    <div className="page" id="bookings">

      <Navbar />

      <div className="booking-page">

        <h1>Premium Booking</h1>

        <div className="booking-card">

          <img
            src={movie.image}
            alt={movie.title}
          />

          <div className="booking-info">

            <h2>{movie.title}</h2>

            <select
              onChange={(e) =>
                setSelectedTheater(e.target.value)
              }
            >

              <option value="">
                Select Theatre
              </option>

              <option>PVR</option>

              <option>INOX</option>

              <option>Cinepolis</option>

            </select>

            <input
              type="date"

              onChange={(e) =>
                setSelectedDate(e.target.value)
              }
            />

            <input
              type="text"

              placeholder="Full Name"

              onChange={(e) =>
                setCustomerName(e.target.value)
              }
            />

            <div className="time-slots">

              {
                [
                  "11:00 AM",
                  "03:00 PM",
                  "06:45 PM",
                  "10:30 PM"
                ]
                .map(time => (

                  <button

                    key={time}

                    type="button"

                    className={
                      selectedTime === time
                      ? "active-time"
                      : ""
                    }

                    onClick={() =>
                      setSelectedTime(time)
                    }
                  >

                    {time}

                  </button>

                ))
              }

            </div>

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <select>

              <option>
                Seat Category
              </option>

              <option>
                Silver ₹250
              </option>

              <option>
                Gold ₹450
              </option>

              <option>
                VIP Recliner ₹900
              </option>

            </select>

            <div className="seat-layout">

              <h3>Select Your Seats</h3>

              <div className="screen">

                SCREEN THIS WAY

              </div>

              <div className="seats">

                {
                  seats.map(seat => (

                    <button

                      key={seat}

                      type="button"

                      className={
                        selectedSeats.includes(seat)
                        ? "selected-seat"
                        : ""
                      }

                      onClick={() =>
                        handleSeat(seat)
                      }
                    >

                      {seat}

                    </button>

                  ))
                }

              </div>

            </div>

            <button
              className="book-btn"
              onClick={confirmBooking}
            >

              Confirm Booking

            </button>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Bookings