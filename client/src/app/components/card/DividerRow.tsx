import styled from '@emotion/styled';

import { rgba } from 'styles/color';

export const DividerRow = styled.div<{ withborder?: 'top' | 'bottom' }>(
  (props) => ({
    borderTop:
      props.withborder === 'bottom'
        ? 'none'
        : `1px solid ${rgba('#B2B2B2', 0.25)}`,
    borderBottom:
      props.withborder === 'top'
        ? 'none'
        : `1px solid ${rgba('#B2B2B2', 0.25)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 52,
    padding: '0 20px',
    width: '100%',
  }),
);
