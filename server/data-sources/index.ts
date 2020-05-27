import BankAccount from './BankAccount';
import BankStatement from './BankStatement';
import BankTransaction from './BankTransaction';
import Category from './Category';
import CreditCardAccount from './CreditCardAccount';
import CreditCardStatement from './CreditCardStatement';
import CreditCardTransaction from './CreditCardTransaction';
import Merchant from './Merchant';

import { BankAccountModel } from './models/BankAccount';
import { BankStatementModel } from './models/BankStatement';
import { BankTransactionModel } from './models/BankTransaction';
import { CategoryModel } from './models/Category';
import { CreditCardAccountModel } from './models/CreditCardAccount';
import { CreditCardStatementModel } from './models/CreditCardStatement';
import { CreditCardTransactionModel } from './models/CreditCardTransaction';
import { MerchantModel } from './models/Merchant';
import { type } from 'ramda';

const dataSources = () => ({
  bankAccount: new BankAccount(BankAccountModel),
  bankStatement: new BankStatement(BankStatementModel),
  bankTransaction: new BankTransaction(BankTransactionModel),
  category: new Category(CategoryModel),
  creditCardAccount: new CreditCardAccount(CreditCardAccountModel),
  creditCardStatement: new CreditCardStatement(CreditCardStatementModel),
  creditCardTransaction: new CreditCardTransaction(CreditCardTransactionModel),
  merchant: new Merchant(MerchantModel),
});

export type DataSources = ReturnType<typeof dataSources>;

export default dataSources;
