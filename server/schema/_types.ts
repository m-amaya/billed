export interface Page {
  pageNum: number;
  count: number;
  pageTotal: number;
}

export type BankAccountType = 'CHECKING' | 'SAVINGS';

export type BankTransactionType = 'CREDIT' | 'DEBIT' | 'TRANSFER';

export interface List<T> {
  page: Page;
  list: T[];
}

export interface BankAccount {
  id: string;
  name: string;
  accounting: number;
  bank: string;
  type: BankAccountType;
}

export interface BankStatement {
  id: string;
  startDate: number;
  endDate: number;
  begBalance: number;
  deposits: number;
  withdrawals: number;
  endBalance: number;
  bank: BankAccount;
}

export interface BankTransaction {
  id: string;
  date: number;
  description: string;
  merchant: Merchant;
  type: BankTransactionType;
  category: Category;
  amount: number;
  isPending: boolean;
  bank: BankAccount;
}

export interface Category {
  id: string;
  name: string;
  tag: string;
  color: string;
  icon: string;
}

export interface CreditCardAccount {
  id: string;
  name: string;
  limit: number;
  apr: number;
  cardNumber: number;
  expDate: string;
  network: string;
}

export interface CreditCardStatement {
  id: string;
  startDate: number;
  endDate: number;
  begBalance: number;
  credit: number;
  debt: number;
  endBalance: number;
  dueDate: number;
  card: CreditCardAccount;
}

export interface CreditCardTransaction {
  id: string;
  date: number;
  description: string;
  merchant: Merchant;
  category: Category;
  amount: number;
  isPending: boolean;
  card: CreditCardAccount;
}

export interface Merchant {
  id: string;
  name: string;
  tag: string;
  url: string;
  photo: string;
}
