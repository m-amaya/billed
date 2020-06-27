import styled from '@emotion/styled';
import Card from 'components/card';
import Flex from 'components/Flex';
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <Flex center grow>
      <Form>Login Page</Form>
    </Flex>
  );
};

const Form = styled(Card)({
  width: 365,
});

export default LoginPage;
