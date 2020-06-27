import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react';
import { routes } from 'utils/routes';

const IndexPage: React.FC = () => {
  const router = useRouter();
  const authCookie = Cookie.get('auth');

  console.log({ authCookie });

  if (!authCookie) {
    router.push(routes.login);
  }

  return (
    <Test>
      <FontAwesomeIcon icon="plus-circle" /> Hello World
    </Test>
  );
};

const Test = styled.div({});

export default IndexPage;
