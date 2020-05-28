export default {
  root: {
    base: '/',
    login: '/login',
  },
  page: {
    summary: '/summary',
    trends: '/trends',
    settings: '/settings',
  },
  summary: {
    overview: '/summary/overview',
    transactions: '/summary/transactions',
    bills: '/summary/bills',
    savings: '/summary/savings',
  },
  trends: {
    budgeting: '/trends/budgeting',
    spending: '/trends/spending',
  },
  settings: {
    accounts: '/settings/accounts',
    income: '/settings/income',
    merchants: '/settings/merchants',
    category: '/settings/category',
  },
  accounts: {
    detail: '/settings/accounts/:accountId',
    add: '/settings/accounts/:accountId/add',
    edit: '/settings/accounts/:accountId/edit',
  },
  income: {
    detail: '/settings/income/:incomeId',
    add: '/settings/income/:incomeId/add',
    edit: '/settings/income/:incomeId/edit',
  },
  merchants: {
    detail: '/settings/merchants/:merchantId',
    add: '/settings/merchants/:merchantId/add',
    edit: '/settings/merchants/:merchantId/edit',
  },
  category: {
    detail: '/settings/category/:categoryId',
    add: '/settings/category/:categoryId/add',
    edit: '/settings/category/:categoryId/edit',
  },
};
