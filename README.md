<div align="center">

# 🎬 CineHub — 3-Tier Movie Ticket Booking Platform

</div>

<div align="center">

[![Frontend](https://img.shields.io/badge/Frontend-React%2018%20%7C%20Vite-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Backend](https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot)](https://spring.io/projects/spring-boot)
[![Database](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![Cloud](https://img.shields.io/badge/Cloud-AWS-FF9900?style=for-the-badge&logo=amazonaws)](https://aws.amazon.com/)
[![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk)](https://www.oracle.com/java/)

<br/>

> **A simple full-stack movie ticket booking application built with a clean 3-tier architecture.**

<br/>

**React · Spring Boot · MySQL · Docker · AWS**

</div>

---

## 📖 About the Application

**CineHub** is a full-stack **movie ticket booking platform** designed using a **3-tier application architecture**. It provides a simple movie browsing and booking experience while demonstrating how a frontend, backend, and database work together in a real-world application.

The application is divided into three main layers:

- 🎨 **Presentation Tier** — React-based frontend for the user interface and booking interaction.
- ⚙️ **Application Tier** — Spring Boot backend that provides REST APIs and handles booking operations.
- 🗄️ **Data Tier** — MySQL database used for persistent booking data.

The application follows:

**React Frontend → Spring Boot REST API → MySQL Database**

---

## 💻 Tech Stack

### Frontend Architecture

- **Framework**: React 18 + Vite
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Styling**: CSS3

### Backend Architecture

- **Language**: Java 17
- **Framework**: Spring Boot 3.2.5
- **API**: REST APIs
- **Database Access**: Spring Data JPA + Hibernate
- **Build Tool**: Maven
- **Additional Library**: Lombok

### Database

- **Database**: MySQL
- **Database Driver**: MySQL Connector/J

### Containerization & Cloud

- **Containerization**: Docker
- **Cloud Platform**: AWS
- **Deployment**: AWS EC2

---

## 🏗️ Application Architecture

```text
                              ┌──────────────────────────────────────┐
                              │              AWS EC2                 │
                              │                                      │
                              │        Dockerized Application        │
                              │                                      │
                              │  ┌────────────────────────────────┐  │
                              │  │       React + Vite Frontend     │  │
                              │  │                                │  │
                              │  │      Presentation Tier         │  │
                              │  └───────────────┬────────────────┘  │
                              │                  │                   │
                              │                  │ HTTP / REST API   │
                              │                  ▼                   │
                              │  ┌────────────────────────────────┐  │
                              │  │       Spring Boot Backend       │  │
                              │  │                                │  │
                              │  │ Controller → Service →         │  │
                              │  │ Repository → JPA / Hibernate   │  │
                              │  │                                │  │
                              │  │      Application Tier          │  │
                              │  └───────────────┬────────────────┘  │
                              │                  │                   │
                              └──────────────────┼───────────────────┘
                                                 │
                                                 │ JDBC
                                                 ▼
                              ┌──────────────────────────────────────┐
                              │             MySQL Database            │
                              │                                      │
                              │              cinehub_db               │
                              │                                      │
                              │               bookings                │
                              │                                      │
                              │              Data Tier                │
                              └──────────────────────────────────────┘
````

### 🔄 Application Request Flow

```text
User
  │
  ▼
React Frontend
  │
  │ Axios / HTTP Request
  ▼
Spring Boot REST Controller
  │
  ▼
Booking Service
  │
  ▼
Booking Repository
  │
  │ JPA / Hibernate
  ▼
MySQL Database
  │
  │ Response
  ▼
Spring Boot Backend
  │
  │ REST Response
  ▼
React Frontend
  │
  ▼
User
```

---

## 📁 Repository Directory Structure

```text
CineHub-3-Tier-Movie-Ticket-Booking/
│
├── README.md
├── .gitignore
│
├── backend/
│   ├── pom.xml
│   │
│   └── src/
│       └── main/
│           ├── java/
│           │   ├── com/cinehub/
│           │   │   ├── CinehubApplication.java
│           │   │   │
│           │   │   ├── controller/
│           │   │   │   └── BookingController.java
│           │   │   │
│           │   │   ├── entity/
│           │   │   │   └── Booking.java
│           │   │   │
│           │   │   ├── repository/
│           │   │   │   └── BookingRepository.java
│           │   │   │
│           │   │   └── service/
│           │   │       ├── BookingService.java
│           │   │       └── impl/
│           │   │           └── BookingServiceImpl.java
│           │   │
│           │   └── config/
│           │       └── CorsConfig.java
│           │
│           └── resources/
│               └── application.properties
│
└── frontend/
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── index.html
    ├── eslint.config.js
    │
    ├── database/
    │   └── cinehub_db.sql
    │
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        ├── reportWebVitals.js
        │
        ├── components/
        │   ├── BookingForm.jsx
        │   ├── BookingTable.jsx
        │   ├── DashboardCards.jsx
        │   ├── Footer.jsx
        │   ├── HeroBanner.jsx
        │   ├── MovieCard.jsx
        │   ├── MovieRow.jsx
        │   ├── Navbar.jsx
        │   ├── SearchBar.jsx
        │   └── Sidebar.jsx
        │
        ├── data/
        │   └── movies.js
        │
        ├── pages/
        │   ├── BookingSuccess.jsx
        │   ├── Bookings.jsx
        │   ├── BookingsList.jsx
        │   ├── Dashboard.jsx
        │   ├── Home.jsx
        │   ├── Movies.jsx
        │   └── NotFound.jsx
        │
        ├── routes/
        │   └── AppRoutes.jsx
        │
        ├── services/
        │   └── BookingService.js
        │
        └── styles/
            ├── booking.css
            ├── dashboard.css
            ├── hero.css
            ├── navbar.css
            ├── neon-theme.css
            ├── premium.css
            └── table.css
```

---

## 🔌 Service Port Registry & API Specifications

| Service / Component  | Technology   | Port   | Endpoint / Resource         | Description                          |
| :------------------- | :----------- | :----- | :-------------------------- | :----------------------------------- |
| **CineHub Frontend** | React + Vite | `5173` | `/`                         | Movie browsing and booking interface |
| **CineHub Backend**  | Spring Boot  | `8080` | `/api/bookings`             | Booking REST API                     |
| **Create Booking**   | REST API     | `8080` | `POST /api/bookings`        | Creates a new booking                |
| **Get Bookings**     | REST API     | `8080` | `GET /api/bookings`         | Retrieves booking records            |
| **Delete Booking**   | REST API     | `8080` | `DELETE /api/bookings/{id}` | Deletes a booking by ID              |
| **MySQL Database**   | MySQL        | `3306` | `cinehub_db`                | Persistent application data          |
| **Booking Table**    | MySQL        | `3306` | `bookings`                  | Stores movie booking information     |

---

## ✨ Application Features

### 🎬 Movie Experience

* Browse available movies
* Movie cards and movie rows
* Movie search functionality
* Movie-focused home page
* Responsive movie interface

### 🎟️ Booking Management

* Create movie ticket bookings
* View booking records
* Delete existing bookings
* Booking success page
* Booking dashboard
* Booking table

### 🖥️ User Interface

* React-based component architecture
* Navigation between application pages
* Dashboard interface
* Search functionality
* Responsive CSS-based design
* Custom application theme

---

## 🚀 Quick Start Guide

### Prerequisites

Make sure the following are installed:

* **Java 17**
* **Maven**
* **Node.js & npm**
* **MySQL**

### 1. Clone the Repository

```bash
git clone https://github.com/SuryakantKulkarni/CineHub-3-Tier-Movie-Ticket-Booking.git
cd CineHub-3-Tier-Movie-Ticket-Booking
```

### 2. Configure the Database

Start your MySQL server.

Execute the SQL script:

```text
frontend/database/cinehub_db.sql
```

Update the database configuration in:

```text
backend/src/main/resources/application.properties
```

Configure the MySQL username, password, and database connection for your environment.

### 3. Start the Backend

Open a terminal:

```bash
cd backend
```

Run:

```bash
mvn spring-boot:run
```

Backend:

```text
http://localhost:8080
```

### 4. Start the Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

## 🐳 Docker

CineHub can be containerized using Docker to provide a consistent application environment.

The containerized application follows the 3-tier flow:

```text
                    Docker Environment
                           │
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
      React Frontend              Spring Boot Backend
             │                           │
             └─────────────┬─────────────┘
                           │
                           ▼
                      MySQL Database
```

---

## ☁️ AWS Deployment

CineHub is designed to run on **AWS EC2**, with Docker used for application containerization.

```text
                         AWS Cloud
                            │
                         EC2 Instance
                            │
                          Docker
                            │
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
       React Frontend             Spring Boot Backend
                                          │
                                          ▼
                                    MySQL Database
```

---

## 🔐 Configuration & Security

Sensitive configuration should not be committed to GitHub.

The project uses `.gitignore` rules to prevent environment-specific files such as `.env` from being uploaded.

Database credentials should be configured according to the local or deployment environment.

---

## 🛠️ Troubleshooting

### Backend Not Starting

Check that:

* Java 17 is installed.
* MySQL is running.
* Database credentials are correct.
* Port `8080` is available.

Check Java:

```bash
java -version
```

Check Maven:

```bash
mvn -version
```

### Frontend Not Starting

Install dependencies again:

```bash
cd frontend
npm install
```

Then:

```bash
npm run dev
```

### Database Connection Error

Verify:

```text
MySQL Server → Running
Database Name → cinehub_db
Username → Correct
Password → Correct
Port → 3306
```

---

## 🎯 Project Objectives

* Understand **3-tier application architecture**
* Build a React frontend
* Develop REST APIs using Spring Boot
* Implement database operations using JPA/Hibernate
* Work with MySQL
* Understand frontend-backend communication
* Containerize applications using Docker
* Deploy applications on AWS EC2
* Practice Git and GitHub workflow

---

## 🚀 Future Enhancements

* User authentication and authorization
* Movie administration module
* Seat selection
* Showtime management
* Online payment integration
* Booking update functionality
* Admin dashboard
* CI/CD pipeline
* AWS managed database integration
* Production monitoring

---

## 🤝 Contributing

Contributions, improvements, and suggestions are welcome.

```bash
# Create a feature branch
git checkout -b feature/your-feature

# Add changes
git add .

# Commit changes
git commit -m "feat: add your feature"

# Push branch
git push origin feature/your-feature
```

Create a Pull Request after pushing your changes.

---

## ⭐ Support

If you find this project useful:

* ⭐ Star the repository
* 🍴 Fork the repository for your own learning
* 🛠️ Explore the code
* 💡 Suggest improvements

---

<div align="center">

**🎬 CineHub — Book. Watch. Enjoy. 🍿**

Built with React · Spring Boot · MySQL · Docker · AWS

</div>
