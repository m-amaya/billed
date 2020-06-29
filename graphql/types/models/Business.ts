import { Types } from 'mongoose';
import { Category } from './Category';

/**
 * Represents a business.
 */
export interface Business {
  id: Types.ObjectId;
  name: string;
  label: string;
  url: string;
  logoUrl: string;
  defaultCategory: Category;
}
