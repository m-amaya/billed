import { Document, Schema, model } from 'mongoose';

export type AccountType = 'BANK' | 'CC';

/**
 * Represents a monthly statement for an account.
 */
export interface BankStatementDocument extends Document {
  startDate: string;
  closingDate: string;
  startBalance: number;
  endBalance?: number;
  credit?: number;
  debit?: number;
  dueDate?: string;
  for: AccountType;
  forBankId?: Schema.Types.ObjectId;
  forCCId?: Schema.Types.ObjectId;
}

const schema = new Schema({
  startDate: String,
  closingDate: String,
  startBalance: Number,
  endBalance: Number,
  credit: Number,
  debit: Number,
  dueDate: String,
  for: {
    type: String,
    enum: ['BANK', 'CC'],
  },
  forBankId: Schema.Types.ObjectId,
  forCCId: Schema.Types.ObjectId,
});

export const BankStatementModel = model<BankStatementDocument>(
  'BankStatement',
  schema,
);
