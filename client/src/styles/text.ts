import styled from '@emotion/styled';

import font from './font';

export const LabelText = styled.span({
  color: '#49415E',
  fontSize: 15,
  fontWeight: font.weight.bold,
  lineHeight: '15px',
});

export const Subtext = styled.span({
  color: '#9B98A6',
  fontSize: 11,
  lineHeight: '11px',
  paddingTop: 5,
  textTransform: 'uppercase',
});

export const AmountText = styled.span<{
  kind?: 'credit' | 'debt';
  size?: 'small' | 'big';
}>(({ kind = 'credit', size = 'small' }) => ({
  color: kind === 'credit' ? '#937DD1' : '#DE8FD2',
  fontSize: size === 'small' ? 14 : 18,
  fontWeight: font.weight.bold,
}));
