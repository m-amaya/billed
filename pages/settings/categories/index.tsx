import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const CategoryDetailPage = dynamic(() => import('./[categoryId]'));

interface Props {
  activePath: string;
  categoryId: string;
  redirectPath: string;
}

const CategoryOverviewPage: React.FC<Props> = ({
  activePath = '',
  categoryId = '',
  redirectPath = '',
}) => {
  const Router = useRouter();

  useEffect(() => {
    Router.replace(activePath, redirectPath, { shallow: true });
  }, [activePath, redirectPath]);

  return <CategoryDetailPage activePath={activePath} categoryId={categoryId} />;
};

export default CategoryOverviewPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;
  const categoryId = '1234';

  return {
    props: {
      activePath,
      categoryId,
      redirectPath: `${activePath}/${categoryId}`,
    },
  };
};
