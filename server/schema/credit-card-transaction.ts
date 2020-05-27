export const typeDef = `
  type CreditCardTransaction {
    id: ID!
    date: Int
    description: String
    merchant: Merchant
    category: Category
    amount: Float
    isPending: Boolean
    card: CreditCardAccount
  }
`;
