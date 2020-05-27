import { MongoDataSource } from 'apollo-datasource-mongodb';

import { CreditCardStatementDocument } from './models/CreditCardStatement';

export default class CreditCardStatement extends MongoDataSource<
  CreditCardStatementDocument
> {}
