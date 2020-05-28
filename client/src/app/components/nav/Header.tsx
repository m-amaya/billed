import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'app/routes';
import logoSvg from 'assets/billed-logo.svg';
import bp from 'styles/breakpoint';

import { HeadLink } from './HeadLink';

const TABS = [
  {
    path: routes.page.summary,
    label: 'Summary',
  },
  {
    path: routes.page.trends,
    label: 'Trends',
  },
  {
    path: routes.page.settings,
    label: 'Settings',
  },
];

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <LogoLink to={routes.summary.overview}>
          <Logo />
        </LogoLink>
        {TABS.map((tab) => (
          <HeadLink key={tab.path} {...tab} />
        ))}
      </LeftWrapper>
      <RightWrapper>Marissa Amaya</RightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#6744C8',
  padding: '0 50px',
  height: 70,
  minWidth: bp.tablet,
  width: '100%',
});

const LeftWrapper = styled.div({
  display: 'flex',
});

const LogoLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 50,
  outline: 0,
});

const Logo = styled.div({
  background: `url(${logoSvg})`,
  height: 38,
  width: 125,
});

const RightWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF',
  fontSize: 16,
});
