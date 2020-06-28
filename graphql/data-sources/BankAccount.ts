import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Types } from 'mongoose';
import { BankAccountDocument } from './models/BankAccount';

export default class BankAccount extends MongoDataSource<BankAccountDocument> {
  oneById(bankId: Types.ObjectId) {
    return this.findOneById(bankId);
  }
}
