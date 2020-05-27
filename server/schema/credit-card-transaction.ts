import { IResolvers } from 'apollo-server';

import {
  Category,
  Context,
  CreditCardAccount,
  CreditCardTransaction,
  List,
  ListArgs,
  Merchant,
  OneArgs,
} from './_types';

export const typeDef = `
  type CreditCardTransaction {
    id: ID!
    date: Int
    description: String
    merchant: Merchant
    category: Category
    amount: Float
    isPending: Boolean
    card: CreditCardAccount
  }

  type CreditCardTransactionList {
    page: Page!
    list: [CreditCardTransaction]!
  }

  extend type Query {
    creditCardTransactionList(pageNum: Int, count: Int): CreditCardTransactionList
    creditCardTransaction(id: ID!): CreditCardTransaction
  }
`;

type CreditCardTransactionForGraph = Omit<
  CreditCardTransaction,
  'merchant' | 'category' | 'card'
> & {
  merchantId: string;
  categoryId: string;
  cardId: string;
};

export const resolvers: IResolvers<CreditCardTransactionForGraph, Context> = {
  Query: {
    creditCardTransactionList: (
      _,
      { pageNum = 1, count = -1 }: ListArgs,
    ): List<CreditCardTransactionForGraph> => {
      return {
        page: {
          pageNum,
          count,
          pageTotal: 1,
        },
        list: [
          {
            id: 'cc-transaction-1234',
            date: Date.now(),
            description: 'description',
            merchantId: 'merchant-1234',
            categoryId: 'category-1234',
            amount: 1.0,
            isPending: false,
            cardId: 'cc-1234',
          },
        ],
      };
    },
    creditCardTransaction: (
      _,
      { id }: OneArgs,
    ): CreditCardTransactionForGraph => {
      return {
        id,
        date: Date.now(),
        description: 'description',
        merchantId: 'merchant-1234',
        categoryId: 'category-1234',
        amount: 1.0,
        isPending: false,
        cardId: 'cc-1234',
      };
    },
  },
  CreditCardTransaction: {
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
    card: ({ cardId }): CreditCardAccount => {
      return {
        id: cardId,
        name: 'Card Name',
        limit: 1000,
        apr: 12.2,
        cardNumber: 111000,
        expDate: '01/04',
        network: 'Network',
      };
    },
  },
};
