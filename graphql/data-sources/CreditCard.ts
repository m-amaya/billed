import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Types } from 'mongoose';
import { CreditCardDocument } from './models/CreditCard';

export default class CreditCard extends MongoDataSource<CreditCardDocument> {
  oneById(ccId: Types.ObjectId) {
    return this.findOneById(ccId);
  }
}
