import { MongoDataSource } from 'apollo-datasource-mongodb';

import { BankAccountDocument } from './models/BankAccount';

export default class BankAccount extends MongoDataSource<BankAccountDocument> {}
