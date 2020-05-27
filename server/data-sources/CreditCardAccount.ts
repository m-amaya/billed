import { MongoDataSource } from 'apollo-datasource-mongodb';

import { CreditCardAccountDocument } from './models/CreditCardAccount';

export default class CreditCardAccount extends MongoDataSource<
  CreditCardAccountDocument
> {}
