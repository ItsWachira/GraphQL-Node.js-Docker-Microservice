const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const db = require('./utils/db'); // Import Sequelize instance
require('dotenv').config(); // Load environment variables from .env file

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, db }), // Pass Sequelize instance to context
});

server.listen({ port: 3000 }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
