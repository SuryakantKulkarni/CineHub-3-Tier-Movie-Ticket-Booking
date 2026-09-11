function BookingForm() {
  return (
    <div className="form-card">

      <input type="text" placeholder="Customer Name" />

      <input type="email" placeholder="Customer Email" />

      <input type="text" placeholder="Movie Name" />

      <input type="text" placeholder="Theater Name" />

      <input type="text" placeholder="Seat Type" />

      <input type="number" placeholder="Ticket Count" />

      <button>Book Ticket</button>

    </div>
  )
}

export default BookingForm