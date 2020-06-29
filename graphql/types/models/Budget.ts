import { Types } from 'mongoose';
import { BankAccount } from './BankAccount';
import { Category } from './Category';
import { CreditCard } from './CreditCard';

export type BudgetSource = 'BANK' | 'CC' | 'CATEGORY';

/**
 * Represents a monthly budget for an account or category.
 */
export interface Budget {
  id: Types.ObjectId;
  amount: number;
  for: BudgetSource;
  forBank: BankAccount;
  forCC: CreditCard;
  forCategory: Category;
}
