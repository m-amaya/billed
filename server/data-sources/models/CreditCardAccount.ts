import { Document, Schema, model } from 'mongoose';

export interface CreditCardAccountDocument extends Document {
  name: string;
  limit: number;
  apr: number;
  cardNumber: number;
  expDate: string;
  network: string;
}

const schema = new Schema({
  name: String,
  limit: Number,
  apr: Number,
  cardNumber: Number,
  expDate: String,
  network: String,
});

export const CreditCardAccountModel = model<CreditCardAccountDocument>(
  'CreditCardAccount',
  schema,
);
