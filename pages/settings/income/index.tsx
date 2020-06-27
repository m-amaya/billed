import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const IncomeDetailPage = dynamic(() => import('./[incomeId]'));

interface Props {
  activePath: string;
  incomeId: string;
  redirectPath: string;
}

const IncomeOverviewPage: React.FC<Props> = ({
  activePath = '',
  incomeId = '',
  redirectPath = '',
}) => {
  const Router = useRouter();

  useEffect(() => {
    Router.replace(activePath, redirectPath, { shallow: true });
  }, [activePath, redirectPath]);

  return <IncomeDetailPage activePath={activePath} incomeId={incomeId} />;
};

export default IncomeOverviewPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;
  const incomeId = '1234';

  return {
    props: {
      activePath,
      incomeId,
      redirectPath: `${activePath}/${incomeId}`,
    },
  };
};
