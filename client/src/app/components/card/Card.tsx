import styled from '@emotion/styled';

import { rgba } from 'styles/color';

export const Card = styled.div({
  backgroundColor: '#FFFFFF',
  border: `1px solid ${rgba('#B2B2B2', 0.25)}`,
  borderRadius: 10,
  boxShadow: `0 1px 1px ${rgba('#B2B2B2', 0.5)}`,
  overflow: 'hidden',
});
