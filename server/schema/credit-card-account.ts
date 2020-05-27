export const typeDef = `
  type CreditCardAccount {
    id: ID!
    name: String
    limit: Float
    apr: Float
    cardNumber: Int
    expDate: Int
    network: String
  }
`;
