import styled from '@emotion/styled';
import React from 'react';
import { animated, useSpring } from 'react-spring';

import { Button } from 'app/components/button/Button';
import { Card } from 'app/components/card/Card';
import { Input } from 'app/components/form/Input';
import billedLogoSvg from 'assets/billed-logo.svg';

export const LoginPage: React.FC = () => {
  const headBlockProps = useSpring({
    background: '#6744C8',
    top: 0,
    from: { background: '#FFFFFF', top: -80 },
    config: {
      duration: 750,
    },
  });

  return (
    <Page>
      <Card style={{ width: 365 }}>
        <CardHeader>
          <HeadBlock style={headBlockProps} />
          <BilledLogo />
        </CardHeader>
        <CardContent>
          <Input type="text" label="Username" />
          <Input type="password" label="Password" />
          <ActionWrapper>
            <Button>LOGIN</Button>
          </ActionWrapper>
        </CardContent>
      </Card>
    </Page>
  );
};

const Page = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
});

const CardHeader = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  borderTopLeftRadius: 9,
  borderTopRightRadius: 9,
  height: 80,
  width: '100%',
});

const HeadBlock = styled(animated.div)({
  position: 'absolute',
  left: 0,
  borderTopLeftRadius: 'inherit',
  borderTopRightRadius: 'inherit',
  height: 'inherit',
  width: 'inherit',
  zIndex: 0,
});

const BilledLogo = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-60%, -50%)',
  background: `url(${billedLogoSvg})`,
  height: 38,
  width: 125,
  zIndex: 1,
});

const CardContent = styled.div({
  'padding': '40px 20px 20px',
  '& > div': {
    marginBottom: 15,
  },
  '& > div:last-child': {
    marginBottom: 0,
  },
});

const ActionWrapper = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 40,
});
