import { IResolvers } from 'apollo-server';

import {
  BankAccount,
  BankTransaction,
  Category,
  List,
  ListArgs,
  Merchant,
  OneArgs,
} from './_types';

export const typeDef = `
  enum BankTransactionType {
    CREDIT
    DEBIT
    TRANSFER
  }

  type BankTransaction {
    id: ID!
    date: Int
    description: String
    merchant: Merchant
    type: BankTransactionType
    category: Category
    amount: Float
    isPending: Boolean
    bank: BankAccount
  }

  type BankTransactionList {
    page: Page!
    list: [BankTransaction]!
  }

  extend type Query {
    bankTransactionList(pageNum: Int, count: Int): BankTransactionList
    bankTransaction(id: ID!): BankTransaction
  }
`;

type BankTransactionForGraph = Omit<
  BankTransaction,
  'merchant' | 'category' | 'bank'
> & {
  merchantId: string;
  categoryId: string;
  bankId: string;
};

export const resolvers: IResolvers<BankTransactionForGraph> = {
  Query: {
    bankTransactionList: (
      _,
      { pageNum = 1, count = -1 }: ListArgs,
    ): List<BankTransactionForGraph> => {
      return {
        page: {
          pageNum,
          count,
          pageTotal: 1,
        },
        list: [
          {
            id: 'bank-transaction-1234',
            date: Date.now(),
            description: 'description',
            merchantId: 'merchant-1234',
            type: 'CREDIT',
            categoryId: 'category-1234',
            amount: 1234,
            isPending: false,
            bankId: 'bank-1234',
          },
        ],
      };
    },
    bankTransaction: (_, { id }: OneArgs): BankTransactionForGraph => {
      return {
        id,
        date: Date.now(),
        description: 'description',
        merchantId: 'merchant-1234',
        type: 'CREDIT',
        categoryId: 'category-1234',
        amount: 1234,
        isPending: false,
        bankId: 'bank-1234',
      };
    },
  },
  BankTransaction: {
    merchant: ({ merchantId }): Merchant => {
      return {
        id: merchantId,
        name: 'Merchant Name',
        tag: 'merchant-tag',
        url: 'http://example.com',
        photo: 'logo.svg',
      };
    },
    category: ({ categoryId }): Category => {
      return {
        id: categoryId,
        name: 'Category Name',
        tag: 'category-tag',
        color: '#FFFFFF',
        icon: 'faClock',
      };
    },
    bank: ({ bankId }): BankAccount => {
      return {
        id: bankId,
        name: 'Bank Account',
        accounting: 111000,
        bankName: 'Bank',
        type: 'CHECKING',
      };
    },
  },
};
