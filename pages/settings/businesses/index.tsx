import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const BusinessDetailPage = dynamic(() => import('./[businessId]'));

interface Props {
  activePath: string;
  businessId: string;
  redirectPath: string;
}

const BusinessOverviewPage: React.FC<Props> = ({
  activePath = '',
  businessId = '',
  redirectPath = '',
}) => {
  const Router = useRouter();

  useEffect(() => {
    Router.replace(activePath, redirectPath, { shallow: true });
  }, [activePath, redirectPath]);

  return <BusinessDetailPage activePath={activePath} businessId={businessId} />;
};

export default BusinessOverviewPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;
  const businessId = '1234';

  return {
    props: {
      activePath,
      businessId,
      redirectPath: `${activePath}/${businessId}`,
    },
  };
};
