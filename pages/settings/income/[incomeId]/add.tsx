import Flex from 'components/Flex';
import Nav from 'components/nav';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  activePath: string;
  incomeId: string;
}

const AddIncomePage: React.FC<Props> = ({ activePath = '', incomeId = '' }) => {
  return (
    <>
      <Nav activePath={activePath} />
      <Flex grow>content</Flex>
    </>
  );
};

export default AddIncomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;
  const incomeId = ctx.params?.incomeId;

  return {
    props: {
      activePath,
      incomeId,
    },
  };
};
