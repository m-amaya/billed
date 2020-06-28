import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Types } from 'mongoose';
import { BankStatementDocument } from './models/BankStatement';

export default class BankStatement extends MongoDataSource<
  BankStatementDocument
> {
  oneById(statementId: Types.ObjectId) {
    return this.findOneById(statementId);
  }
}
