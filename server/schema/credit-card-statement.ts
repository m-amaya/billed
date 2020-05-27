import { IResolvers } from 'apollo-server';

import {
  Context,
  CreditCardAccount,
  CreditCardStatement,
  List,
  ListArgs,
  OneArgs,
} from './_types';

export const typeDef = `
  type CreditCardStatement {
    id: ID!
    startDate: Int
    endDate: Int
    begBalance: Float
    credit: Float
    debt: Float
    endBalance: Float
    dueDate: Int
    card: CreditCardAccount
  }

  type CreditCardStatementList {
    page: Page!
    list: [CreditCardStatement]!
  }

  type CreditCardStatementResponse {
    success: Boolean!
    message: String
    data: CreditCardStatement
  }

  extend type Query {
    creditCardStatementList(pageNum: Int, count: Int): CreditCardStatementList
    creditCardStatement(id: ID!): CreditCardStatement
  }

  extend type Mutation {
    creditCardStatementAdd(): CreditCardStatementResponse
    creditCardStatementEdit(id: ID!): CreditCardStatementResponse
    creditCardStatementDelete(id: ID!): CreditCardStatementResponse
  }
`;

type CreditCardStatementForGraph = Omit<CreditCardStatement, 'card'> & {
  cardId: string;
};

export const resolvers: IResolvers<CreditCardStatementForGraph, Context> = {
  Query: {
    creditCardStatementList: (
      _,
      { pageNum = 1, count = -1 }: ListArgs,
    ): List<CreditCardStatementForGraph> => {
      return {
        page: {
          pageNum,
          count,
          pageTotal: 1,
        },
        list: [
          {
            id: 'cc-statement-1234',
            startDate: Date.now(),
            endDate: Date.now(),
            begBalance: 12.34,
            credit: 0,
            debt: 0,
            endBalance: 12.34,
            dueDate: Date.now(),
            cardId: 'card-1234',
          },
        ],
      };
    },
    creditCardStatement: (_, { id }: OneArgs): CreditCardStatementForGraph => {
      return {
        id,
        startDate: Date.now(),
        endDate: Date.now(),
        begBalance: 12.34,
        credit: 0,
        debt: 0,
        endBalance: 12.34,
        dueDate: Date.now(),
        cardId: 'card-1234',
      };
    },
  },
  CreditCardStatement: {
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
