import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import cookies from 'next-cookies';
import React, { useEffect } from 'react';
import { routes } from 'utils/routes';

const LoginPage = dynamic(() => import('./login'));

interface Props {
  loggedIn: boolean;
}

const IndexPage: React.FC<Props> = ({ loggedIn }) => {
  const Router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      Router.replace('/', routes.login, { shallow: true });
    }
  }, [loggedIn]);

  if (!loggedIn) return <LoginPage />;

  return (
    <Test>
      <FontAwesomeIcon icon="plus-circle" /> Hello World
    </Test>
  );
};

const Test = styled.div({});

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { auth } = cookies(ctx);
  let loggedIn = false;

  if (auth) {
    loggedIn = true;
  }

  return {
    props: {
      loggedIn,
    },
  };
};
