import { ApolloServer } from 'apollo-server';

import schema from './schema';

const server = new ApolloServer({ schema });

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`🔮 Magic happens on ${url}`));
