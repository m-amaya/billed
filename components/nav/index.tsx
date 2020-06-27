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
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: '#FFF',
  boxShadow: `0 2px 4px ${rgba('#B2B2B2', 0.5)}`,
  width: '100%',
  zIndex: 100,
});

export default Nav;
