import { Document, Schema, Types, model } from 'mongoose';

export interface CreditCardTransactionDocument extends Document {
  date: number;
  description: string;
  merchantId: Types.ObjectId;
  categoryId: Types.ObjectId;
  amount: number;
  isPending: boolean;
  cardId: Types.ObjectId;
}

const schema = new Schema({
  date: Number,
  description: String,
  merchantId: Types.ObjectId,
  categoryId: Types.ObjectId,
  amount: Number,
  isPending: Boolean,
  cardId: Types.ObjectId,
});

export const CreditCardTransactionModel = model<CreditCardTransactionDocument>(
  'CreditCardTransaction',
  schema,
);
