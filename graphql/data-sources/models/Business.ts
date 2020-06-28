import { Document, Schema, model } from 'mongoose';

/**
 * Represents a business
 */
export interface BusinessDocument extends Document {
  name: string;
  label: string;
  url: string;
  logoUrl: string;
  defaultCategoryId: Schema.Types.ObjectId;
}

const schema = new Schema({
  name: String,
  label: String,
  url: String,
  logoUrl: String,
  defaultCategoryId: Schema.Types.ObjectId,
});

export const BusinessModel = model<BusinessDocument>('Business', schema);
