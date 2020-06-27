import { SidebarColumn, DetailColumn } from 'components/layout/Column';
import Content from 'components/layout/Content';
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
      <Content>
        <SidebarColumn>sidebar</SidebarColumn>
        <DetailColumn>details</DetailColumn>
      </Content>
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
