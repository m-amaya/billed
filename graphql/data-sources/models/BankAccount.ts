import { Document, Schema, model } from 'mongoose';

export type BankAccountType = 'CHECKING' | 'SAVINGS' | 'CD';

/**
 * Represents a user's bank account.
 */
export interface BankAccountDocument extends Document {
  name: string;
  accountNumber: string;
  routingNumber: string;
  bankName: string;
  type: BankAccountType;
  term?: number;
  maturityDate?: string;
  APY?: number;
  budgetId?: Schema.Types.ObjectId;
}

const schema = new Schema({
  name: String,
  accountNumber: String,
  routingNumber: String,
  bankName: String,
  type: {
    type: String,
    enum: ['CHECKING', 'SAVINGS', 'CD'],
  },
  term: Number,
  maturityDate: String,
  APY: Number,
  budgetId: Schema.Types.ObjectId,
});

export const BankAccountModel = model<BankAccountDocument>(
  'BankAccount',
  schema,
);
