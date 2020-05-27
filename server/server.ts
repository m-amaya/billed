import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import schema from './schema';

const server = new ApolloServer({ schema });

mongoose.connect(
  'mongodb://localhost:27017/billed',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      return console.log('✘ Error connecting to MongoDB:', err);
    }

    console.log('✔ Successfully connected to MongoDB');
  },
);

server
  .listen({ port: 4200 })
  .then(({ url }) => console.log(`🔮 Magic happens on ${url}`));
