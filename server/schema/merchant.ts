import { IResolvers } from 'apollo-server';

import { Merchant, List, ListArgs, OneArgs } from './_types';

export const typeDef = `
  type Merchant {
    id: ID!
    name: String
    tag: String
    url: String
    photo: String
  }

  type MerchantList {
    page: Page!
    list: [Merchant]!
  }

  extend type Query {
    merchantList(pageNum: Int, count: Int): MerchantList
    merchant(id: ID!): Merchant
  }
`;

export const resolvers: IResolvers = {
  Query: {
    merchantList: (
      _,
      { pageNum = 1, count = -1 }: ListArgs,
    ): List<Merchant> => {
      return {
        page: {
          pageNum,
          count,
          pageTotal: 1,
        },
        list: [
          {
            id: '1234',
            name: 'Merchant Name',
            tag: 'merchant-tag',
            url: 'http://example.com',
            photo: 'logo.svg',
          },
        ],
      };
    },
    merchant: (_, { id }: OneArgs): Merchant => {
      return {
        id,
        name: 'Merchant Name',
        tag: 'merchant-tag',
        url: 'http://example.com',
        photo: 'logo.svg',
      };
    },
  },
};
