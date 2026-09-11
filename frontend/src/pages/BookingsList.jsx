import Navbar from "../components/Navbar"

import {
  useEffect,
  useState
}
from "react"

import {
  getBookings
}
from "../services/BookingService"

function BookingsList() {

  const [bookings, setBookings]
  = useState([])

  useEffect(() => {

    getBookings()

      .then(res => {

        setBookings(res.data)

      })

      .catch(err => {

        console.log(err)

      })

  }, [])

  if(bookings.length === 0){

    return(

      <div className="page">

        <Navbar />

        <div
          style={{
            color:"white",
            textAlign:"center",
            marginTop:"120px"
          }}
        >

          <h1>No Bookings Yet</h1>

        </div>

      </div>

    )

  }

  return (

    <div className="page">

      <Navbar />

      <div className="bookings-list">

        <h1>Your Bookings</h1>

        {
          bookings.map((booking,index)=>(

            <div
              className="booking-history-card"
              key={index}
            >

              <div>

                <h2>
                  {booking.movieName}
                </h2>

                <p>
                  Customer:
                  {" "}
                  {booking.customerName}
                </p>

                <p>
                  Theatre:
                  {" "}
                  {booking.theaterName}
                </p>

                <p>
                  Timing:
                  {" "}
                  {booking.showTime}
                </p>

                <p>
                  Date:
                  {" "}
                  {booking.showDate}
                </p>

                <p>
                  Tickets:
                  {" "}
                  {booking.ticketCount}
                </p>

                <p>
                  Status:
                  {" "}
                  {booking.bookingStatus}
                </p>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  )

}

export default BookingsList