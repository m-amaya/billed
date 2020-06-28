import { Document, Schema, model } from 'mongoose';

/**
 * Represents a recurring bill to be paid.
 */
export interface BillDocument extends Document {
  label: string;
  description: string;
  forBusinessId: Schema.Types.ObjectId;
  categoryId: Schema.Types.ObjectId;
  defaultAmount: number;
  interval: string;
}

const schema = new Schema({
  label: String,
  description: String,
  forBusinessId: Schema.Types.ObjectId,
  categoryId: Schema.Types.ObjectId,
  defaultAmount: Number,
  interval: String,
});

export const BillModel = model<BillDocument>('Bill', schema);
