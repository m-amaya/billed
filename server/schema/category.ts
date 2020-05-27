import { IResolvers } from 'apollo-server';

import { Category, List, ListArgs, OneArgs } from './_types';

export const typeDef = `
  type Category {
    id: ID!
    name: String
    tag: String
    color: String
    icon: String
  }

  type CategoryList {
    page: Page!
    list: [Category]!
  }

  type CategoryResponse {
    success: Boolean!
    message: String
    data: Category
  }

  extend type Query {
    categoryList(pageNum: Int, count: Int): CategoryList
    category(id: ID!): Category
  }

  extend type Mutation {
    categoryAdd(): CategoryResponse
    categoryEdit(id: ID!): CategoryResponse
    categoryDelete(id: ID!): CategoryResponse
  }
`;

export const resolvers: IResolvers = {
  Query: {
    categoryList: (
      _,
      { pageNum = 1, count = -1 }: ListArgs,
    ): List<Category> => {
      return {
        page: {
          pageNum,
          count,
          pageTotal: 1,
        },
        list: [
          {
            id: 'category-1234',
            name: 'Category Name',
            tag: 'category-tag',
            color: '#FFFFFF',
            icon: 'faClock',
          },
        ],
      };
    },
    category: (_, { id }: OneArgs): Category => {
      return {
        id,
        name: 'Category Name',
        tag: 'category-tag',
        color: '#FFFFFF',
        icon: 'faClock',
      };
    },
  },
};
