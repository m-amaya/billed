import { Types } from 'mongoose';
import { Business } from './Business';
import { Category } from './Category';

/**
 * Represents a recurring bill to be paid.
 */
export interface Bill {
  id: Types.ObjectId;
  label: string;
  description: string;
  forBusiness: Business;
  category: Category;
  defaultAmount: number;
  interval: string;
}
