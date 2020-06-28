import { Document, Schema, model } from 'mongoose';

/**
 * Represents a category of a transaction.
 */
export interface CategoryDocument extends Document {
  name: string;
  abbr: string;
  color: string;
  icon: string;
  budgetId?: Schema.Types.ObjectId;
}

const schema = new Schema({
  name: String,
  abbr: String,
  color: String,
  icon: String,
  budgetId: Schema.Types.ObjectId,
});

export const CategoryModel = model<CategoryDocument>('Category', schema);
