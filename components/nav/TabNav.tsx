import styled from '@emotion/styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Flex from 'components/Flex';
import React, { useState, useEffect } from 'react';
import { routes } from 'utils/routes';

import Tab from './TabLink';

type TabKey = 'summary' | 'trends' | 'settings';

const TABS: Record<
  TabKey,
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
    {
      icon: 'university',
      label: 'Accounts',
      path: routes.settings.accounts.overview,
    },
    {
      icon: 'money-bill-wave',
      label: 'Income',
      path: routes.settings.income.overview,
    },
    {
      icon: 'store',
      label: 'Businesses',
      path: routes.settings.businesses.overview,
    },
    {
      icon: 'tags',
      label: 'Category',
      path: routes.settings.categories.overview,
    },
  ],
};

interface Props {
  activePath: string;
}

const TabNav: React.FC<Props> = ({ activePath }) => {
  const [tabKey, setTabKey] = useState<TabKey>('summary');

  useEffect(() => {
    if (activePath.includes('summary')) {
      setTabKey('summary');
    }

    if (activePath.includes('trends')) {
      setTabKey('trends');
    }

    if (activePath.includes('settings')) {
      setTabKey('settings');
    }
  }, [activePath]);

  return (
    <Bar row spaceBetween>
      <Flex row>
        {TABS[tabKey].map(({ icon, label, path }) => (
          <Tab
            key={label}
            icon={icon}
            label={label}
            path={path}
            isActive={activePath.includes(path)}
          />
        ))}
      </Flex>
      <Flex>actions</Flex>
    </Bar>
  );
};

const Bar = styled(Flex)({
  paddingLeft: 40,
  paddingRight: 40,
  height: 70,
});

export default TabNav;
