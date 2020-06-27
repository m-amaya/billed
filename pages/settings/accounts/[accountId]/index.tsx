import Flex from 'components/Flex';
import Nav from 'components/nav';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  activePath: string;
  accountId: string;
}

const AccountDetailPage: React.FC<Props> = ({
  activePath = '',
  accountId = '',
}) => {
  return (
    <>
      <Nav activePath={activePath} />
      <Flex grow>content</Flex>
    </>
  );
};

export default AccountDetailPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;
  const accountId = ctx.params?.accountId;

  return {
    props: {
      activePath,
      accountId,
    },
  };
};
