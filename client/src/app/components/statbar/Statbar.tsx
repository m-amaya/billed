import styled from '@emotion/styled';

import { rgba } from 'styles/color';

export const Statbar = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
  borderTop: `1px solid ${rgba('#B2B2B2', 0.25)}`,
  borderBottom: `1px solid ${rgba('#B2B2B2', 0.25)}`,
  padding: '10px 0',
});
