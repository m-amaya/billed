import styled from '@emotion/styled';
import Button from 'components/button/BlockButton';
import Card from 'components/card';
import Flex from 'components/Flex';
import { Form } from 'components/form';
import Input from 'components/form/Input';
import SVGIcon from 'components/SVGIcon';
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <Flex center grow>
      <Box>
        <Head center>
          <SVGIcon url="/img/logo.svg" width={125} height={38} />
        </Head>
        <LoginForm>
          <Input type="text" label="Username" />
          <Input type="password" label="Password" />
        </LoginForm>
        <Actions right>
          <Button size="lg">Login</Button>
        </Actions>
      </Box>
    </Flex>
  );
};

const Box = styled(Card)({
  width: 365,
});

const Head = styled(Flex)({
  backgroundColor: '#6744C8',
  height: 80,
});

const LoginForm = styled(Form)({
  padding: '40px 20px',
});

const Actions = styled(Flex)({
  padding: '0 20px 20px 20px',
});

export default LoginPage;
