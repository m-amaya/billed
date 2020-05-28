import styled from '@emotion/styled';
import React, { useState, ChangeEventHandler } from 'react';

interface Props {
  type: 'text' | 'password';
  label: string;
}

export const Input: React.FC<Props> = ({ type = 'text', label = '' }) => {
  const [isFocused, setFocus] = useState(false);
  const [value, setValue] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setValue(value);
  };

  return (
    <Wrapper>
      <Label isFocused={isFocused}>{label}</Label>
      <Field
        type={type}
        placeholder={isFocused ? '' : label}
        isFocused={isFocused}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  position: 'relative',
  height: 48,
  width: '100%',
});

const Label = styled.label<{ isFocused: boolean }>((props) => ({
  position: 'absolute',
  top: 5,
  left: '1rem',
  color: '#9B98A6',
  fontSize: 12,
  opacity: props.isFocused ? 1 : 0,
  transition: 'opacity 400ms',
}));

const Field = styled.input<{ isFocused: boolean }>((props) => ({
  'border': '1px solid',
  'borderColor': props.isFocused ? '#6744C8' : '#D9D9D9',
  'borderRadius': 5,
  'color': '#49415E',
  'height': 'inherit',
  'fontSize': 16,
  'outline': 0,
  'padding': '0 1rem',
  'paddingTop': props.isFocused ? '1rem' : 0,
  'width': 'inherit',
  'transition': 'all 400ms',
  '&:placeholder': {
    color: '#9B98A6',
  },
}));
