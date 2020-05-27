export interface Page {
  pageNum: number;
  count: number;
  pageTotal: number;
}

export type BankAccountType = 'CHECKING' | 'SAVINGS';

export interface BankAccount {
  id: string;
  name: string;
  accounting: number;
  bank: string;
  type: BankAccountType;
}

export interface BankAccountList {
  page: Page;
  list: BankAccount[];
}
