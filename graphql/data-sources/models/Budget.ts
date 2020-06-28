import { Document, Schema, model } from 'mongoose';

export type BudgetSource = 'BANK' | 'CC' | 'CATEGORY';

/**
 * Represents a monthly budget for an account or category.
 */
export interface BudgetDocument extends Document {
  amount: number;
  for: BudgetSource;
  forBankId: Schema.Types.ObjectId;
  forCCId: Schema.Types.ObjectId;
  forCategoryId: Schema.Types.ObjectId;
}

const schema = new Schema({
  amount: Number,
  for: {
    type: String,
    enum: ['BANK', 'CC', 'CATEGORY'],
  },
  forBankId: Schema.Types.ObjectId,
  forCCId: Schema.Types.ObjectId,
  forCategoryId: Schema.Types.ObjectId,
});

export const BudgetModel = model<BudgetDocument>('Budget', schema);
