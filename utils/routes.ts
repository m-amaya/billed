export const routes = {
  login: '/login',
  summary: {
    bills: '/summary/bills',
    overview: '/summary/overview',
    savings: '/summary/savings',
    transactions: '/summary/transactions',
  },
  trends: {
    budgeting: '/trends/budgeting',
    spending: '/trends/spending',
  },
  settings: {
    accounts: {
      overview: '/settings/accounts',
      detail: '/settings/accounts/:accountId',
      add: '/settings/accounts/:accountId/add',
      edit: '/settings/accounts/:accountId/edit',
    },
    businesses: {
      overview: '/settings/businesses',
      detail: '/settings/businesses/:businessId',
      add: '/settings/businesses/:businessId/add',
      edit: '/settings/businesses/:businessId/edit',
    },
    categories: {
      overview: '/settings/categories',
      detail: '/settings/categories/:categoryId',
      add: '/settings/categories/:categoryId/add',
      edit: '/settings/categories/:categoryId/edit',
    },
    income: {
      overview: '/settings/income',
      detail: '/settings/income/:incomeId',
      add: '/settings/income/:incomeId/add',
      edit: '/settings/income/:incomeId/edit',
    },
  },
};
