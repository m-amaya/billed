import { Document, Schema, model } from 'mongoose';

import { BankAccountType } from '../../schema/_types';

export interface BankAccountDocument extends Document {
  name: string;
  accounting: number;
  bankName: string;
  type: BankAccountType;
}

const schema = new Schema({
  name: String,
  accounting: Number,
  bankName: String,
  type: {
    type: String,
    enum: ['CHECKING', 'SAVINGS'],
  },
});

export const BankAccountModel = model<BankAccountDocument>(
  'BankAccount',
  schema,
);
