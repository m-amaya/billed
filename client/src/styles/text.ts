import styled from '@emotion/styled';

import font from './font';

export const Title = styled.span({
  color: '#49415E',
  fontSize: 18,
  fontWeight: font.weight.bold,
});

export const LabelText = styled.span({
  color: '#49415E',
  fontSize: 14,
  fontWeight: font.weight.bold,
  lineHeight: '14px',
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
  color: kind === 'credit' ? '#37C4B9' : '#E97686',
  fontSize: size === 'small' ? 14 : 16,
  fontWeight: font.weight.bold,
}));
