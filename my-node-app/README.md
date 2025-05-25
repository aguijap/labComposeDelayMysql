# My Node App

This is a simple Node.js application that serves a "Hello World" page using Express and provides basic employee management with a MySQL backend.

## Project Structure

```
my-node-app
├── public
│   ├── index.html       # Main HTML page
│   ├── styles.css       # Styles for the frontend
│   └── main.js          # Frontend JavaScript
├── src
│   └── server.js        # Entry point for the Node.js server
├── .env                 # Environment variables
├── Dockerfile           # Docker build instructions
├── docker-compose.yml   # Multi-container orchestration
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Getting Started

Follow these steps to get a local or containerized copy up and running.

### Prerequisites

- Node.js (version 14 or later)
- npm (Node package manager)
- Docker & Docker Compose (optional, for containerized setup)

### Installation (Local)

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```sh
   cd my-node-app
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

4. Create a `.env` file in the root directory with your database credentials:
   ```
   DB_HOST=localhost
   DB_USER=<your-db-user>
   DB_PASSWORD=<your-db-password>
   DB_DATABASE=<your-db-name>
   DB_PORT=3306
   ```

5. Make sure you have a running MySQL server and the database exists.

### Running the Application (Local)

To start the server, run:
```sh
node src/server.js
```

The application will be running at [http://localhost:3000](http://localhost:3000).

---

## Running with Docker Compose

1. Ensure your `.env` file contains:
   ```
   DB_HOST=db
   DB_USER=admin
   DB_PASSWORD=example
   DB_DATABASE=mydatabase
   DB_PORT=3306
   ```

2. Build and start the containers:
   ```sh
   docker-compose up --build
   ```

3. The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Features

- Add new employees (nombre, apellidos, edad aleatoria)
- List all employees
- Responsive and professional frontend

## Built With

- [Express](https://expressjs.com/) - Web framework for Node.js
- [MySQL](https://www.mysql.com/) - Relational database
- [Docker](https://www.docker.com/) - Containerization
- [Docker Compose](https://docs.docker.com/compose/) - Multi-container orchestration

---

## License

This project is licensed under the MIT License.