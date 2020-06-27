import Flex from 'components/Flex';
import Nav from 'components/nav';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  activePath: string;
}

const IncomeOverviewPage: React.FC<Props> = ({ activePath = '' }) => {
  /** TODO: Re-route to detail page */
  return (
    <>
      <Nav activePath={activePath} />
      <Flex grow>content</Flex>
    </>
  );
};

export default IncomeOverviewPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;

  return {
    props: {
      activePath,
    },
  };
};
