import { Types } from 'mongoose';
import { Budget } from './Budget';

/**
 * Represents a user's credit card account.
 */
export interface CreditCard {
  id: Types.ObjectId;
  name: string;
  cardNumber: string;
  expiration: string;
  limit: number;
  APR: number;
  network: string;
  budget?: Budget;
}
