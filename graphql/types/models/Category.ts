import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Types } from 'mongoose';
import { Budget } from './Budget';

/**
 * Represents a category of a transaction.
 */
export interface Category {
  id: Types.ObjectId;
  name: string;
  abbr: string;
  color: string;
  icon: IconProp;
  budget?: Budget;
}
