import styled from '@emotion/styled';
import Flex from 'components/Flex';
import React from 'react';
import { rgba } from 'utils/color';

import HeadNav from './HeadNav';
import TabNav from './TabNav';

interface Props {
  activePath: string;
}

const Nav: React.FC<Props> = ({ activePath }) => {
  return (
    <Bar>
      <HeadNav activePath={activePath} />
      <TabNav activePath={activePath} />
    </Bar>
  );
};

const Bar = styled(Flex)({
  backgroundColor: '#FFF',
  boxShadow: `0 2px 4px ${rgba('#B2B2B2', 0.5)}`,
});

export default Nav;
