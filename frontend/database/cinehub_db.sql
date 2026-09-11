CREATE DATABASE cinehub_db;

USE cinehub_db;

CREATE TABLE bookings (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255),
    customer_email VARCHAR(255),
    movie_name VARCHAR(255),
    theater_name VARCHAR(255),
    seat_type VARCHAR(100),
    ticket_count INT,
    show_date VARCHAR(50),
    show_time VARCHAR(50),
    phone_number VARCHAR(20),
    booking_status VARCHAR(50)
);