import styled from '@emotion/styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ActionButton } from 'app/components/button/ActionButton';
import routes from 'app/routes';
import bp from 'styles/breakpoint';

import { TabLink } from './TabLink';

type TabKeyType = 'summary' | 'trends' | 'settings';

const TABS: Record<
  TabKeyType,
  Array<{ icon: IconProp; label: string; path: string }>
> = {
  summary: [
    { icon: 'calendar', label: 'Overview', path: routes.summary.overview },
    {
      icon: 'exchange-alt',
      label: 'Transactions',
      path: routes.summary.transactions,
    },
    { icon: 'receipt', label: 'Bills', path: routes.summary.bills },
    { icon: 'piggy-bank', label: 'Savings', path: routes.summary.savings },
  ],
  trends: [
    {
      icon: 'balance-scale',
      label: 'Budgeting',
      path: routes.trends.budgeting,
    },
    { icon: 'chart-pie', label: 'Spending', path: routes.trends.spending },
  ],
  settings: [
    { icon: 'university', label: 'Accounts', path: routes.settings.accounts },
    { icon: 'money-bill-wave', label: 'Income', path: routes.settings.income },
    { icon: 'store', label: 'Merchants', path: routes.settings.merchants },
    { icon: 'tags', label: 'Category', path: routes.settings.category },
  ],
};

export const TabNav: React.FC = () => {
  const location = useLocation();
  const [tabKey, setKey] = useState<TabKeyType>('summary');

  useEffect(() => {
    if (location.pathname.includes(routes.page.summary)) {
      setKey('summary');
    }

    if (location.pathname.includes(routes.page.trends)) {
      setKey('trends');
    }

    if (location.pathname.includes(routes.page.settings)) {
      setKey('settings');
    }
  }, [location.pathname]);

  return (
    <Wrapper>
      <LeftWrap>
        {TABS[tabKey].map((tab) => (
          <TabLink
            key={tab.label}
            {...tab}
            isActive={location.pathname.includes(tab.path)}
          />
        ))}
      </LeftWrap>
      <RightWrap>
        <ActionButton>Transaction</ActionButton>
        <ActionButton>Bill</ActionButton>
      </RightWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  height: 70,
  padding: '0 50px',
  minWidth: bp.tablet,
  width: '100%',
});

const LeftWrap = styled.div({
  display: 'flex',
});

const RightWrap = styled.div({
  'display': 'flex',
  'alignItems': 'center',
  '& > *': {
    marginLeft: 10,
  },
});
