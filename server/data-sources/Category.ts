import { MongoDataSource } from 'apollo-datasource-mongodb';

import { CategoryDocument } from './models/Category';

export default class Category extends MongoDataSource<CategoryDocument> {}
