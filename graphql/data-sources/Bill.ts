import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Types } from 'mongoose';
import { BillDocument } from './models/Bill';

export default class Bill extends MongoDataSource<BillDocument> {
  oneById(billId: Types.ObjectId) {
    return this.findOneById(billId);
  }
}
