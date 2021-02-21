const { ApolloServer, PubSub } = require("apollo-server");

const mongoose = require(`mongoose`);

// types
const typeDefs = require("./graphql/typeDefs");
// resolvers
const resolvers = require("./graphql/resolvers");
const { MONGODB } = require("./config.ts");

const pubsub = new PubSub();

// es6
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});
// connect db before turn on server
mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("monogodb connected");
    return server.listen({ port: 5000 });
  })

  // turn on server

  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
