# CSE JnU Auth Client Example

This is a demo project showing how to integrate CSE JnU Authentication system into your web application. The project demonstrates a simple login flow using the CSE JnU Auth service.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- Nodemon (for development)

## Setup

1. Clone this repository:
```bash
git clone <repository-url>
cd cse-jnu-auth-client-example
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## How It Works

1. User clicks the "Login with CSE JnU" button
2. They are redirected to the CSE JnU Auth service
3. After successful authentication, user is redirected back with a token
4. The token is verified on the server-side
5. User information is displayed if verification is successful

## Project Structure

```
├── api/
│   └── server.js      # Express server
├── public/
│   ├── index.html     # Main application page
│   ├── success.html   # Authentication callback handler
│   └── styles.css     # Styling
└── README.md          # This file

```

## License

This project is available for educational purposes.

## Author

MT ASFI

[GitHub](https://github.com/asfi50)
