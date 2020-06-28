import { Document, Schema, model } from 'mongoose';

/**
 * Represents the user of the app.
 */
export interface UserDocument extends Document {
  username: string;
  password: string;
}

const schema = new Schema({
  username: String,
  password: String,
});

export const UserModel = model<UserDocument>('User', schema);
