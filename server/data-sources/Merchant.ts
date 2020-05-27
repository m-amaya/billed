import { MongoDataSource } from 'apollo-datasource-mongodb';

import { MerchantDocument } from './models/Merchant';

export default class Merchant extends MongoDataSource<MerchantDocument> {}
