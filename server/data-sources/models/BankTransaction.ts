import { Document, Schema, Types, model } from 'mongoose';

import { BankTransactionType } from '../../schema/_types';

export interface BankTransactionDocument extends Document {
  date: number;
  description: string;
  merchantId: Types.ObjectId;
  type: BankTransactionType;
  categoryId: Types.ObjectId;
  amount: number;
  isPending: boolean;
  bankId: Types.ObjectId;
}

const schema = new Schema({
  date: Number,
  description: String,
  merchantId: Types.ObjectId,
  type: {
    type: String,
    enum: ['CREDIT', 'DEBIT', 'TRANSFER'],
  },
  categoryId: Types.ObjectId,
  amount: Number,
  isPending: Boolean,
  bankId: Types.ObjectId,
});

export const BankTransactionModel = model<BankTransactionDocument>(
  'BankTransaction',
  schema,
);
