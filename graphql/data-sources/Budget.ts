import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Types } from 'mongoose';
import { BudgetDocument } from './models/Budget';

export default class Budget extends MongoDataSource<BudgetDocument> {
  oneById(budgetId: Types.ObjectId) {
    return this.findOneById(budgetId);
  }
}
