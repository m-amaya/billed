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
`;
