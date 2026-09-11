import { useLocation, Link } from "react-router-dom"

function BookingSuccess() {

  const location = useLocation()

  const booking = location.state

  if(!booking){

    return (

      <div className="success-page">

        <h1>No Booking Found</h1>

        <Link to="/">
          Go Home
        </Link>

      </div>

    )

  }

  return (

    <div className="success-page">

      <div className="success-card">

        <div className="success-icon">
          ✅
        </div>

        <h1>Booking Confirmed</h1>

        <p>Your tickets are booked successfully</p>

        <div className="ticket-details">

          <h2>{booking.movie}</h2>

          <p>
            <strong>Name:</strong>
            {" "}
            {booking.customer}
          </p>

          <p>
            <strong>Theatre:</strong>
            {" "}
            {booking.theater}
          </p>

          <p>
            <strong>Date:</strong>
            {" "}
            {booking.date}
          </p>

          <p>
            <strong>Timing:</strong>
            {" "}
            {booking.timing}
          </p>

          <p>
            <strong>Seats:</strong>
            {" "}
            {booking.seats.join(", ")}
          </p>

        </div>

        <Link to="/">
          <button className="book-btn">
            Back To Home
          </button>
        </Link>

      </div>

    </div>

  )
}

export default BookingSuccess