import { IResolvers, makeExecutableSchema } from 'apollo-server';
import { mergeWith, reduce } from 'ramda';

import {
  typeDef as BankAccount,
  resolvers as bankAccountResolvers,
} from './bank-account';
import {
  typeDef as BankStatement,
  resolvers as bankStatementResolvers,
} from './bank-statement';
import {
  typeDef as BankTransaction,
  resolvers as bankTransactionResolvers,
} from './bank-transaction';
import {
  typeDef as Category,
  resolvers as categoryResolvers,
} from './category';
import {
  typeDef as CreditCardAccount,
  resolvers as creditCardAccountResolvers,
} from './credit-card-account';
import {
  typeDef as CreditCardStatement,
  resolvers as creditCardStatementResolvers,
} from './credit-card-statement';
import {
  typeDef as CreditCardTransaction,
  resolvers as creditCardTransactionResolvers,
} from './credit-card-transaction';
import {
  typeDef as Merchant,
  resolvers as merchantResolvers,
} from './merchant';

const Query = `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Page {
    pageNum: Int
    count: Int
    pageTotal: Int
  }
`;

const resolvers = reduce<IResolvers, IResolvers>(
  (accResolvers, currResolvers) =>
    mergeWith(
      (queryA, queryB) => ({ ...queryA, ...queryB }),
      currResolvers,
      accResolvers,
    ),
  {},
  [
    bankAccountResolvers,
    bankStatementResolvers,
    bankTransactionResolvers,
    categoryResolvers,
    creditCardAccountResolvers,
    creditCardStatementResolvers,
    creditCardTransactionResolvers,
    merchantResolvers,
  ],
);

export default makeExecutableSchema({
  typeDefs: [
    Query,
    BankAccount,
    BankStatement,
    BankTransaction,
    Category,
    CreditCardAccount,
    CreditCardStatement,
    CreditCardTransaction,
    Merchant,
  ],
  resolvers,
});
