import { IResolvers } from 'apollo-server';

import { BankAccount, List } from './_types';

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
      pageNum: number = 1,
      count: number = -1,
    ): List<BankAccount> => {
      return {
        page: {
          pageNum,
          count,
          pageTotal: 1,
        },
        list: [
          {
            id: '1',
            name: 'Bank Account',
            accounting: 111000,
            bankName: 'Bank',
            type: 'CHECKING',
          },
        ],
      };
    },
    bankAccount: (_, { id }: { id: string }): BankAccount => {
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
