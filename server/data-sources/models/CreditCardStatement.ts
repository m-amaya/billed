import { Document, Schema, Types, model } from 'mongoose';

export interface CreditCardStatementDocument extends Document {
  startDate: number;
  endDate: number;
  begBalance: number;
  credit: number;
  debt: number;
  endBalance: number;
  dueDate: number;
  cardId: Types.ObjectId;
}

const schema = new Schema({
  startDate: Number,
  endDate: Number,
  begBalance: Number,
  credit: Number,
  debt: Number,
  endBalance: Number,
  dueDate: Number,
  cardId: Types.ObjectId,
});

export const CreditCardStatementModel = model<CreditCardStatementDocument>(
  'CreditCardStatement',
  schema,
);
