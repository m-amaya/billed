import { MongoDataSource } from 'apollo-datasource-mongodb';

import { BankStatementDocument } from './models/BankStatement';

export default class BankStatement extends MongoDataSource<
  BankStatementDocument
> {}
