import { Types } from 'mongoose';

export type BankAccountType = 'CHECKING' | 'SAVINGS' | 'CD';

/**
 * Represents a user's bank account.
 */
export interface BankAccount {
  id: Types.ObjectId;
  name: string;
  accountName: string;
  routingNumber: string;
  bankName: string;
  type: BankAccountType;
}
