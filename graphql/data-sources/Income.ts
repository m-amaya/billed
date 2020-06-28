import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Types } from 'mongoose';
import { IncomeDocument } from './models/Income';

export default class Income extends MongoDataSource<IncomeDocument> {
  oneById(incomeId: Types.ObjectId) {
    return this.findOneById(incomeId);
  }
}
