import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import cookies from 'next-cookies';
import React, { useEffect } from 'react';
import { routes } from 'utils/routes';

const LoginPage = dynamic(() => import('./login'));
const SummaryPage = dynamic(() => import('./summary/overview'));

interface Props {
  loggedIn: boolean;
}

const IndexPage: React.FC<Props> = ({ loggedIn }) => {
  const Router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      Router.replace('/', routes.login, { shallow: true });
    } else {
      Router.replace('/', routes.summary.overview, { shallow: true });
    }
  }, [loggedIn]);

  if (!loggedIn) return <LoginPage />;

  return <SummaryPage activePath={routes.summary.overview} />;
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { auth } = cookies(ctx);
  let loggedIn = true;

  if (auth) {
    loggedIn = true;
  }

  return {
    props: {
      loggedIn,
    },
  };
};
