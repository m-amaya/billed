import { Document, Schema, model } from 'mongoose';

/**
 * Represents a user's income.
 */
export interface IncomeDocument extends Document {
  label: string;
  fromBusinessId: Schema.Types.ObjectId;
  amount: number;
  interval: string;
}

const schema = new Schema({
  label: String,
  fromBusinessId: Schema.Types.ObjectId,
  amount: Number,
  interval: String,
});

export const IncomeModel = model<IncomeDocument>('Income', schema);
