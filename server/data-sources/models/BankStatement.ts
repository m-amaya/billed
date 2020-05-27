import { Document, Schema, Types, model } from 'mongoose';

export interface BankStatementDocument extends Document {
  startDate: number;
  endDate: number;
  begBalance: number;
  deposits: number;
  withdrawals: number;
  endBalance: number;
  bankId: Types.ObjectId;
}

const schema = new Schema({
  startDate: Number,
  endDate: Number,
  begBalance: Number,
  deposits: Number,
  withdrawals: Number,
  endBalance: Number,
  bankId: Types.ObjectId,
});

export const BankStatementModel = model<BankStatementDocument>(
  'BankStatement',
  schema,
);
