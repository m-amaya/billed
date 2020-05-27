import { MongoDataSource } from 'apollo-datasource-mongodb';

import { CreditCardTransactionDocument } from './models/CreditCardTransaction';

export default class CreditCardTransaction extends MongoDataSource<
  CreditCardTransactionDocument
> {}
