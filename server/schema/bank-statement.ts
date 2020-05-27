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
`;
