import { Document, Schema, model } from 'mongoose';

export interface MerchantDocument extends Document {
  name: string;
  tag: string;
  url: string;
  photo: string;
}

const schema = new Schema({
  name: String,
  tag: String,
  url: String,
  photo: String,
});

export const MerchantModel = model<MerchantDocument>('Merchant', schema);
