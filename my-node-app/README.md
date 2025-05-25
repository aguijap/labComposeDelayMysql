# My Node App

This is a simple Node.js application that serves a "Hello World" page using Express.

## Project Structure

```
my-node-app
├── public
│   └── index.html      # HTML file for the Hello World page
├── src
│   └── server.js       # Entry point for the Node.js server
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-node-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the server, run the following command:
```
node src/server.js
```

The application will be running at `http://localhost:3000`. Open this URL in your browser to see the "Hello World" page.

### Built With

- [Express](https://expressjs.com/) - The web framework used for building the server.