import styled from '@emotion/styled';
import React, { ChangeEventHandler, useState } from 'react';

interface Props {
  type: 'text' | 'password';
  label: string;
  onDone?(value: string): void;
}

const Input: React.FC<Props> = ({ type, label, onDone }) => {
  const [isFocused, setFocus] = useState(false);
  const [value, setValue] = useState('');

  const updateValue: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setValue(value);

  const onFocus = () => setFocus(true);

  const onBlur = () => {
    setFocus(false);

    if (onDone) {
      onDone(value);
    }
  };

  return (
    <Wrapper data-input>
      <Label isFocused={isFocused}>{label}</Label>
      <Field
        type={type}
        placeholder={isFocused ? '' : label}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={updateValue}
        isFocused={isFocused}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  position: 'relative',
  height: 48,
  width: '100%',
});

const Label = styled.label<{ isFocused: boolean }>(({ isFocused }) => ({
  position: 'absolute',
  top: 5,
  left: '1rem',
  color: '#9B98A6',
  fontSize: 12,
  fontWeight: 400,
  opacity: isFocused ? 1 : 0,
  transition: 'opacity 400ms',
}));

const Field = styled.input<{ isFocused: boolean }>(({ isFocused }) => ({
  border: '1px solid',
  borderColor: isFocused ? '#6744C8' : '#D9D9D9',
  borderRadius: 5,
  color: '#49415E',
  fontSize: 15,
  outline: 0,
  padding: '0 1rem',
  paddingTop: isFocused ? '1rem' : 0,
  transition: 'all 400ms',
  height: 'inherit',
  width: 'inherit',
  '&:placeholder': {
    color: '#9B98A6',
  },
}));

export default Input;
