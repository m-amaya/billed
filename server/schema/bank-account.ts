import { BankAccount, BankAccountList } from './_types';

export const typeDef = `
  enum BankAccountType {
    CHECKING
    SAVINGS
  }

  type BankAccount {
    id: ID!
    name: String
    accounting: Int
    bank: String
    type: BankAccountType
  }

  type BankAccountList {
    page: Page!
    list: [BankAccount]!
  }

  extend type Query {
    bankAccountList(pageNum: Int, count: Int): BankAccountList
    bankAccount(id: ID!): BankAccount
  }
`;

export const resolvers = {
  Query: {
    bankAccountList: (
      pageNum: number = 1,
      count: number = 10,
    ): BankAccountList => {
      return {
        page: {
          pageNum,
          count,
          pageTotal: 1,
        },
        list: [],
      };
    },
    bankAccount: ({}, { id }: { id: string }): BankAccount => {
      return {
        id,
        name: 'Bank Account',
        accounting: 111000,
        bank: 'Bank',
        type: 'CHECKING',
      };
    },
  },
};
