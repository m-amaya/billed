import { Document, Schema, model } from 'mongoose';

export interface CategoryDocument extends Document {
  name: string;
  tag: string;
  color: string;
  icon: string;
}

const schema = new Schema({
  name: String,
  tag: String,
  color: String,
  icon: String,
});

export const CategoryModel = model<CategoryDocument>('Category', schema);
