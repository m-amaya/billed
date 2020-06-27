import styled from '@emotion/styled';
import Flex from 'components/Flex';
import SVGIcon from 'components/SVGIcon';
import Link from 'next/link';
import React from 'react';
import { routes } from 'utils/routes';

import Tab from './HeadLink';

const TABS = [
  {
    keyword: 'summary',
    label: 'Summary',
    path: routes.summary.overview,
  },
  {
    keyword: 'trends',
    label: 'Trends',
    path: routes.trends.budgeting,
  },
  {
    keyword: 'settings',
    label: 'Settings',
    path: routes.settings.accounts.overview,
  },
];

interface Props {
  activePath: string;
}

const HeadNav: React.FC<Props> = ({ activePath }) => {
  return (
    <Bar row spaceBetween>
      <Flex row>
        <Link href={routes.summary.overview}>
          <HomeTab>
            <SVGIcon url="/img/logo.svg" width={125} height={38} />
          </HomeTab>
        </Link>
        <TabRow row>
          {TABS.map(({ path, label, keyword }) => (
            <Tab
              key={keyword}
              path={path}
              label={label}
              isActive={activePath.includes(keyword)}
            />
          ))}
        </TabRow>
      </Flex>
      <Flex row>user</Flex>
    </Bar>
  );
};

const Bar = styled(Flex)({
  backgroundColor: '#6744C8',
  paddingLeft: 40,
  paddingRight: 40,
  height: 70,
});

const HomeTab = styled.a({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const TabRow = styled(Flex)({
  marginLeft: 40,
});

export default HeadNav;
