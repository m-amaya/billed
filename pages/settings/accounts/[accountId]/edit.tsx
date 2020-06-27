import { SidebarColumn, DetailColumn } from 'components/layout/Column';
import Content from 'components/layout/Content';
import Nav from 'components/nav';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  activePath: string;
  accountId: string;
}

const EditAccountPage: React.FC<Props> = ({
  activePath = '',
  accountId = '',
}) => {
  return (
    <>
      <Nav activePath={activePath} />
      <Content>
        <SidebarColumn>sidebar</SidebarColumn>
        <DetailColumn>details</DetailColumn>
      </Content>
    </>
  );
};

export default EditAccountPage;

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
