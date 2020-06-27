import styled from '@emotion/styled';
import { rgba } from 'utils/color';

export const FixedColumn = styled.div({
  backgroundColor: 'salmon',
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
  height: '100%',
  width: 320 + 20 * 2,
});

export const GrowColumn = styled.div<{ side?: 'left' | 'right' }>(
  ({ side = 'left' }) => ({
    backgroundColor: 'aquamarine',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: side === 'left' ? 20 : 0,
    paddingRight: side === 'left' ? 0 : 20,
    height: '100%',
  }),
);

export const SidebarColumn = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FBFCFE',
  borderRight: `1px solid ${rgba('#B2B2B2', 0.25)}`,
  boxShadow: `0 1px 1px ${rgba('#B2B2B2', 0.5)}`,
  width: 300,
  height: '100%',
});

export const DetailColumn = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  backgroundColor: '#FFF',
  padding: 40,
  height: '100%',
});
