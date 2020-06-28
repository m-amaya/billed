import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Types } from 'mongoose';
import { BusinessDocument } from './models/Business';

export default class Business extends MongoDataSource<BusinessDocument> {
  oneById(businessId: Types.ObjectId) {
    return this.findOneById(businessId);
  }
}
