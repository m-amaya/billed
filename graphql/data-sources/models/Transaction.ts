import { Document, Schema, model } from 'mongoose';
import { AccountType } from './BankStatement';

export type TransactionType = 'CREDIT' | 'DEBIT';
export type CreditSource =
  | 'INDIVIDUAL'
  | 'BUSINESS'
  | 'BANK'
  | 'DEPOSIT'
  | 'IRS';
export type DebitSource =
  | 'INDIVIDUAL'
  | 'BUSINESS'
  | 'BANK'
  | 'WITHDRAWAL'
  | 'CC';

/**
 * Represents a transaction on a statement.
 */
export interface TransactionDocument extends Document {
  date: string;
  label: string;
  type: TransactionType;
  from?: CreditSource;
  fromIndividual?: string;
  fromBusinessId?: Schema.Types.ObjectId;
  fromBankId?: Schema.Types.ObjectId;
  fromIncomeId?: Schema.Types.ObjectId;
  for?: DebitSource;
  forIndividual?: string;
  forBusinessId?: Schema.Types.ObjectId;
  forBankId?: Schema.Types.ObjectId;
  forCCId?: Schema.Types.ObjectId;
  forBillId?: Schema.Types.ObjectId;
  amount: number;
  categoryId?: Schema.Types.ObjectId;
  forStatementId?: Schema.Types.ObjectId;
  onAccount: AccountType;
  onBankId?: Schema.Types.ObjectId;
  onCCId?: Schema.Types.ObjectId;
  isPending: boolean;
}

const schema = new Schema({
  date: String,
  label: String,
  type: {
    type: String,
    enum: ['CREDIT', 'DEBIT'],
  },
  from: {
    type: String,
    enum: ['INDIVIDUAL', 'BUSINESS', 'BANK', 'DEPOSIT', 'IRS'],
  },
  fromIndividual: String,
  fromBusinessId: Schema.Types.ObjectId,
  fromBankId: Schema.Types.ObjectId,
  fromIncomeId: Schema.Types.ObjectId,
  for: {
    type: String,
    enum: ['INDIVIDUAL', 'BUSINESS', 'BANK', 'WITHDRAWAL', 'CC'],
  },
  forIndividual: String,
  forBusinessId: Schema.Types.ObjectId,
  forBankId: Schema.Types.ObjectId,
  forCCId: Schema.Types.ObjectId,
  forBillId: Schema.Types.ObjectId,
  amount: Number,
  categoryId: Schema.Types.ObjectId,
  forStatementId: Schema.Types.ObjectId,
  onAccount: {
    type: String,
    enum: ['BANK', 'CC'],
  },
  onBankId: Schema.Types.ObjectId,
  onCCId: Schema.Types.ObjectId,
  isPending: Boolean,
});

export const TransactionModel = model<TransactionDocument>(
  'Transaction',
  schema,
);
