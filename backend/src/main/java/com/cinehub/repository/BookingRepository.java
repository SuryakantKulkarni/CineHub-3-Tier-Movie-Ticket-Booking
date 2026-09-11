package com.cinehub.repository;

import com.cinehub.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}