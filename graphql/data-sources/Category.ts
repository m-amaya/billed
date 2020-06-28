import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Types } from 'mongoose';
import { CategoryDocument } from './models/Category';

export default class Category extends MongoDataSource<CategoryDocument> {
  oneById(categoryId: Types.ObjectId) {
    return this.findOneById(categoryId);
  }
}
