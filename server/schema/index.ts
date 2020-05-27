import { makeExecutableSchema } from 'apollo-server';
import { mergeWith } from 'ramda';

import {
  typeDef as BankAccount,
  resolvers as bankAccountResolvers,
} from './bank-account';
import {
  typeDef as BankStatement,
  resolvers as bankStatementResolvers,
} from './bank-statement';
import { typeDef as BankTransaction } from './bank-transaction';
import { typeDef as Category } from './category';
import { typeDef as CreditCardAccount } from './credit-card-account';
import { typeDef as CreditCardStatement } from './credit-card-statement';
import { typeDef as CreditCardTransaction } from './credit-card-transaction';
import { typeDef as Merchant } from './merchant';

const Query = `
  type Query {
    _empty: String
  }

  type Page {
    pageNum: Int
    count: Int
    pageTotal: Int
  }
`;

const resolvers = mergeWith(
  (queryA, queryB) => ({ ...queryA, ...queryB }),
  bankAccountResolvers,
  bankStatementResolvers,
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
