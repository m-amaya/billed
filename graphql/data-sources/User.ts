import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Types } from 'mongoose';
import { UserDocument } from './models/User';

export default class User extends MongoDataSource<UserDocument> {
  oneById(userId: Types.ObjectId) {
    return this.findOneById(userId);
  }
}
