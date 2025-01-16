
# Book Collection Application

## Overview
A simple Book Collection app using a microservices architecture:
- **Frontend:** HTML, CSS, JavaScript (served by Nginx).
- **Backend:** Node.js/Express API for managing books.
- **Database:** MySQL to store book information.

## Prerequisites
- Docker and Docker Compose installed.

## Setup and Deployment
1. Clone this repository.
2. Navigate to the project directory.
3. Run `docker-compose up` to start the services.

## Access
- Frontend: `http://localhost:8081`
- Backend API: `http://localhost:5000`
- MySQL Database: Port `3306`

## Notes
- Frontend communicates with the backend via REST API.
- Backend interacts with the MySQL database.
- Ensure ports 8080, 5000, and 3306 are available on your machine.
