import { Types } from 'mongoose';

/**
 * Represents a user of the app.
 */
export interface User {
  id: Types.ObjectId;
  username: string;
  password: string;
}
