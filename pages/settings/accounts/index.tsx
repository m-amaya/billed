import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const AccountDetailPage = dynamic(() => import('./[accountId]'));

interface Props {
  activePath: string;
  accountId: string;
  redirectPath: string;
}

const AccountOverviewPage: React.FC<Props> = ({
  activePath = '',
  accountId = '',
  redirectPath = '',
}) => {
  const Router = useRouter();

  useEffect(() => {
    console.log({ redirectPath });
    Router.replace(activePath, redirectPath, { shallow: true });
  }, [activePath, redirectPath]);

  return <AccountDetailPage activePath={activePath} accountId={accountId} />;
};

export default AccountOverviewPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;
  const accountId = '1234';

  return {
    props: {
      activePath,
      accountId,
      redirectPath: `${activePath}/${accountId}`,
    },
  };
};
