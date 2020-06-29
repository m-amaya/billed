import { Types } from 'mongoose';
import { BankAccount } from './BankAccount';
import { CreditCard } from './CreditCard';

export type AccountType = 'BANK' | 'CC';

/**
 * Represents a monthly statement for an account.
 */
export interface BankStatement {
  id: Types.ObjectId;
  startDate: string;
  closingDate: string;
  startBalance: number;
  endBalance?: number;
  credit?: number;
  debit?: number;
  dueDate: string;
  for: AccountType;
  forBank?: BankAccount;
  forCC?: CreditCard;
}
