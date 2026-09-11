package com.cinehub.service.impl;

import com.cinehub.entity.Booking;
import com.cinehub.repository.BookingRepository;
import com.cinehub.service.BookingService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepository repository;

    public BookingServiceImpl(BookingRepository repository) {
        this.repository = repository;
    }

    @Override
    public Booking saveBooking(Booking booking) {
        return repository.save(booking);
    }

    @Override
    public List<Booking> getAllBookings() {
        return repository.findAll();
    }

    @Override
    public void deleteBooking(Long id) {
        repository.deleteById(id);
    }
}