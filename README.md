Task: CRUD Application Development (Java + React)
Task Management Application

📁 Project Structure
bash
Copier
Modifier
Crud-task-management/
├── backend/    # Spring Boot API
├── frontend/   # React UI
└── README.md   # Project documentation
✅ Features
Task creation, update, deletion, listing

RESTful API built with Spring Boot

PostgreSQL database support

Responsive React UI with functional components and hooks

Unit testing:

Backend: JUnit

Frontend: Jest

⚙️ Setup Instructions
1. Clone the Repository
bash
Copier
Modifier
git clone https://github.com/your-username/Crud-task-management.git
cd Crud-task-management
2. Backend Setup (Spring Boot)
Prerequisites
Java 17+

Maven

PostgreSQL

Configure the Database
Create this file:

css
Copier
Modifier
backend/src/main/resources/application.properties
Paste:

properties
Copier
Modifier
spring.datasource.url=jdbc:postgresql://localhost:5432/taskdb
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.sql.init.mode=always
Replace your_username and your_password with your own PostgreSQL credentials.

Run the Backend
bash
Copier
Modifier
cd backend
./mvnw spring-boot:run
3. Frontend Setup (React)
Prerequisites
Node.js >= 18

npm

Install Dependencies
bash
Copier
Modifier
cd frontend
npm install
Run Frontend
bash
Copier
Modifier
npm start
The app will be accessible at http://localhost:3000

🧪 Running Tests
Backend
bash
Copier
Modifier
cd backend
./mvnw test
Frontend
bash
Copier
Modifier
cd frontend
npm test
👤 Author
Asmaa Elbouazzaoui
GitHub: AsmaaElb
Email: asmaaelbouazzaoui8@gmail.com