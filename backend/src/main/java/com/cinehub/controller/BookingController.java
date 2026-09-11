package com.cinehub.controller;

import com.cinehub.entity.Booking;
import com.cinehub.service.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin("*")
public class BookingController {

    private final BookingService service;

    public BookingController(BookingService service) {
        this.service = service;
    }

    @PostMapping
    public Booking saveBooking(@RequestBody Booking booking) {
        return service.saveBooking(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return service.getAllBookings();
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        service.deleteBooking(id);
    }
}