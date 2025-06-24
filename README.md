CRUD-Application-Development-Java-React-
```markdown
# Task Management Application

Full-stack CRUD application built with **Spring Boot** (backend) and **React.js** (frontend).

---

## Project Structure

```

Crud-task-management/
│
├── backend/         # Spring Boot backend API
├── frontend/        # React frontend application
└── README.md        # Project documentation

````

---

## Features

- Create, update, delete, and list tasks
- RESTful API with Spring Boot
- PostgreSQL database integration
- Responsive React UI with functional components and hooks
- Unit tests with JUnit (backend) and Jest (frontend)

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/Crud-task-management.git
cd Crud-task-management
````

### 2. Backend Setup (Spring Boot)

#### Prerequisites

* Java 17 or higher
* Maven
* PostgreSQL

#### Configure the Database

Create `backend/src/main/resources/application.properties` with:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/taskdb
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.sql.init.mode=always
```

Replace `your_username` and `your_password` with your local PostgreSQL credentials.

#### Run the backend server

```bash
cd backend
./mvnw spring-boot:run
```

### 3. Frontend Setup (React)

#### Prerequisites

* Node.js version 18 or above
* npm

#### Install dependencies

```bash
cd frontend
npm install
```

#### Run the frontend

```bash
npm start
```

The app will be accessible at [http://localhost:3000](http://localhost:3000)

---

## Running Tests

### Backend tests

```bash
cd backend
./mvnw test
```

### Frontend tests

```bash
cd frontend
npm test
```

---

## Author

**Asmaa Elbouazzaoui**





