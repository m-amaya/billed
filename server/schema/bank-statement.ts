import { IResolvers } from 'apollo-server';

import { BankAccount, BankStatement, List } from './_types';

export const typeDef = `
  type BankStatement {
    id: ID!
    startDate: Int
    endDate: Int
    begBalance: Float
    deposits: Float
    withdrawals: Float
    endBalance: Float
    bank: BankAccount
  }

  type BankStatementList {
    page: Page!
    list: [BankStatement]!
  }

  extend type Query {
    bankStatementList(pageNum: Int, count: Int): BankStatementList
    bankStatement(id: ID!): BankStatement
  }
`;

type BankStatementForGraph = Omit<BankStatement, 'bank'> & {
  bankId: string;
};

export const resolvers: IResolvers = {
  Query: {
    bankStatementList: (
      pageNum: number = 1,
      count: number = -1,
    ): List<BankStatementForGraph> => {
      return {
        page: {
          pageNum,
          count,
          pageTotal: 1,
        },
        list: [
          {
            id: '1',
            startDate: Date.now(),
            endDate: Date.now(),
            begBalance: 0,
            deposits: 0,
            withdrawals: 0,
            endBalance: 0,
            bankId: 'bank-1234',
          },
        ],
      };
    },
    bankStatement: (_, { id }: { id: string }): BankStatementForGraph => {
      return {
        id,
        startDate: Date.now(),
        endDate: Date.now(),
        begBalance: 0,
        deposits: 0,
        withdrawals: 0,
        endBalance: 0,
        bankId: 'bank-1234',
      };
    },
  },
  BankStatement: {
    bank: ({ bankId }: BankStatementForGraph): BankAccount => {
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
