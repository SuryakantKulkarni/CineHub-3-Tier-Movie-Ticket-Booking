import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Movies from "../pages/Movies"
import Bookings from "../pages/Bookings"
import Dashboard from "../pages/Dashboard"
import BookingSuccess from "../pages/BookingSuccess"
import BookingsList from "../pages/BookingsList"

function AppRoutes() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/movies" element={<Movies />} />

      <Route path="/bookings" element={<BookingsList />} />

      <Route path="/bookings/:id" element={<Bookings />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/success" element={<BookingSuccess />} />

    </Routes>

  )
}

export default AppRoutes