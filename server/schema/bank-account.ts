import { IResolvers } from 'apollo-server';

import { BankAccount, List, ListArgs, OneArgs } from './_types';

export const typeDef = `
  enum BankAccountType {
    CHECKING
    SAVINGS
  }

  type BankAccount {
    id: ID!
    name: String
    accounting: Int
    bankName: String
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

export const resolvers: IResolvers = {
  Query: {
    bankAccountList: (
      _,
      { pageNum = 1, count = -1 }: ListArgs,
    ): List<BankAccount> => {
      return {
        page: {
          pageNum,
          count,
          pageTotal: 1,
        },
        list: [
          {
            id: 'bank-acct-1234',
            name: 'Bank Account',
            accounting: 111000,
            bankName: 'Bank',
            type: 'CHECKING',
          },
        ],
      };
    },
    bankAccount: (_, { id }: OneArgs): BankAccount => {
      return {
        id,
        name: 'Bank Account',
        accounting: 111000,
        bankName: 'Bank',
        type: 'CHECKING',
      };
    },
  },
};
