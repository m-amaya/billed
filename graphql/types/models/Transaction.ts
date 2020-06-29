import { Types } from 'mongoose';
import { BankAccount } from './BankAccount';
import { BankStatement, AccountType } from './BankStatement';
import { Bill } from './Bill';
import { Business } from './Business';
import { Category } from './Category';
import { CreditCard } from './CreditCard';
import { Income } from './Income';

export type TransactionType = 'CREDIT' | 'DEBIT';
export type CreditSource =
  | 'INDIVIDUAL'
  | 'BUSINESS'
  | 'BANK'
  | 'DEPOSIT'
  | 'IRS';
export type DebitSource =
  | 'INDIVIDUAL'
  | 'BUSINESS'
  | 'BANK'
  | 'WITHDRAWAL'
  | 'CC';

/**
 * Represents a transaction on a statement.
 */
export interface Transaction {
  id: Types.ObjectId;
  date: string;
  label: string;
  type: TransactionType;
  from?: CreditSource;
  fromIndividual?: string;
  fromBusiness?: Business;
  fromBank?: BankAccount;
  fromIncome?: Income;
  for?: DebitSource;
  forIndividual?: string;
  forBusiness?: Business;
  forBank?: BankAccount;
  forCC?: CreditCard;
  forBill?: Bill;
  amount: number;
  category: Category;
  forStatement: BankStatement;
  onAccount: AccountType;
  onBank?: BankStatement;
  onCC?: CreditCard;
  isPending: boolean;
}
