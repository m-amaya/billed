import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({});

server
  .listen({ port: 8000 })
  .then(({ url }) => console.log(`🔮 Magic happens on ${url}`));
