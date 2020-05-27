export const typeDef = `
  enum BankTransactionType {
    CREDIT
    DEBIT
    TRANSFER
  }

  type BankTransaction {
    id: ID!
    date: Int
    description: String
    merchant: Merchant
    type: BankTransactionType
    category: Category
    amount: Float
    isPending: Boolean
    bank: BankAccount
  }
`;
