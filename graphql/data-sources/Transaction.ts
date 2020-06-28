import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Types } from 'mongoose';
import { TransactionDocument } from './models/Transaction';

export default class Transaction extends MongoDataSource<TransactionDocument> {
  oneById(transactionId: Types.ObjectId) {
    return this.findOneById(transactionId);
  }
}
