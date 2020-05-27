import { IResolvers } from 'apollo-server';

import { BankAccount, List, ListArgs, OneArgs, Response } from './_types';

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

  type BankAccountResponse {
    success: Boolean!
    message: String
    data: BankAccount
  }

  extend type Query {
    bankAccountList(pageNum: Int, count: Int): BankAccountList
    bankAccount(id: ID!): BankAccount
  }

  extend type Mutation {
    bankAccountAdd(name: String!, accounting: Int!, bankName: String!, type: BankAccountType!): BankAccountResponse
    bankAccountEdit(id: ID!, name: String, accounting: Int, bankName: String, type: BankAccountType): BankAccountResponse
    bankAccountDelete(id: ID!): BankAccountResponse
  }
`;

type BankAccountResponse = Response<BankAccount>;

type AddArgs = Required<Omit<BankAccount, 'id'>>;

type EditArgs = Pick<BankAccount, 'id'> & Partial<Omit<BankAccount, 'id'>>;

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
  Mutation: {
    bankAccountAdd: (
      _,
      { name, accounting, bankName, type }: AddArgs,
    ): BankAccountResponse => {
      return {
        success: true,
        data: {
          id: 'new-bank-acct-1234',
          name,
          accounting,
          bankName,
          type,
        },
      };
    },
    bankAccountEdit: (
      _,
      { id, name, accounting, bankName, type }: EditArgs,
    ): BankAccountResponse => {
      return {
        success: true,
        data: {
          id,
          name: name || 'Bank Account',
          accounting: accounting || 111000,
          bankName: bankName || 'Bank Name',
          type: type || 'CHECKING',
        },
      };
    },
    bankAccountDelete: (_, { id }: OneArgs) => {
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
