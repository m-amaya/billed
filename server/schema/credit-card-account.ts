import { IResolvers } from 'apollo-server';

import { CreditCardAccount, List, ListArgs, OneArgs } from './_types';

export const typeDef = `
  type CreditCardAccount {
    id: ID!
    name: String
    limit: Float
    apr: Float
    cardNumber: Int
    expDate: String
    network: String
  }

  type CreditCardAccountList {
    page: Page!
    list: [CreditCardAccount]!
  }

  type CreditCardAccountResponse {
    success: Boolean!
    message: String
    data: CreditCardAccount
  }

  extend type Query {
    creditCardAccountList(pageNum: Int, count: Int): CreditCardAccountList
    creditCardAccount(id: ID!): CreditCardAccount
  }

  extend type Mutation {
    creditCardAccountAdd(): CreditCardAccountResponse
    creditCardAccountEdit(id: ID!): CreditCardAccountResponse
    creditCardAccountDelete(id: ID!): CreditCardAccountResponse
  }
`;

export const resolvers: IResolvers = {
  Query: {
    creditCardAccountList: (
      _,
      { pageNum = 1, count = -1 }: ListArgs,
    ): List<CreditCardAccount> => {
      return {
        page: {
          pageNum,
          count,
          pageTotal: 1,
        },
        list: [
          {
            id: 'cc-1234',
            name: 'Card Name',
            limit: 1000,
            apr: 12.2,
            cardNumber: 111000,
            expDate: '01/04',
            network: 'Network',
          },
        ],
      };
    },
    creditCardAccount: (_, { id }: OneArgs): CreditCardAccount => {
      return {
        id,
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
