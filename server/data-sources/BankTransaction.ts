import { MongoDataSource } from 'apollo-datasource-mongodb';

import { BankTransactionDocument } from './models/BankTransaction';

export default class BankTransaction extends MongoDataSource<
  BankTransactionDocument
> {}
