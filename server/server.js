const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('./auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Initialize Apollo Server with typeDefs and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Extract the JWT token from the request headers
    const token = req.headers.authorization || '';

    try {
      // Verify and decode the JWT token using your secret key
      const decodedToken = jwt.verify(token, 'your-secret-key'); // Replace with your actual secret key

      // Set the user information in the context
      return { user: decodedToken };
    } catch (error) {
      // If the token is invalid or missing, user will be null in context
      return { user: null };
    }
  },
});

// Middleware to parse JSON and URL-encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Serve the React frontend
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Start the Apollo Server and apply middleware
async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer();

// Start the server after the database connection is established
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
