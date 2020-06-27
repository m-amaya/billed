import Flex from 'components/Flex';
import Nav from 'components/nav';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  activePath: string;
}

const SummaryPage: React.FC<Props> = ({ activePath = '' }) => {
  return (
    <>
      <Nav activePath={activePath} />
      <Flex grow>content</Flex>
    </>
  );
};

export default SummaryPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;

  return {
    props: {
      activePath,
    },
  };
};
