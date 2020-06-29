import { Types } from 'mongoose';
import { Business } from './Business';

/**
 * Represents a user's income.
 */
export interface Income {
  id: Types.ObjectId;
  label: string;
  fromBusiness: Business;
  amount: number;
  interval: string;
}
