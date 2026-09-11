package com.cinehub.service;

import com.cinehub.entity.Booking;
import java.util.List;

public interface BookingService {

    Booking saveBooking(Booking booking);

    List<Booking> getAllBookings();

    void deleteBooking(Long id);
}