import { Document, Schema, model } from 'mongoose';

/**
 * Represents a user's credit card account.
 */
export interface CreditCardDocument extends Document {
  name: string;
  cardNumber: string;
  expiration: string;
  limit: number;
  APR: number;
  network: string;
  budgetId?: Schema.Types.ObjectId;
}

const schema = new Schema({
  name: String,
  cardNumber: String,
  expiration: String,
  limit: Number,
  APR: Number,
  network: String,
  budgetId: Schema.Types.ObjectId,
});

export const CreditCardModel = model<CreditCardDocument>('CreditCard', schema);
