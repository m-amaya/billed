import { FixedColumn, GrowColumn } from 'components/layout/Column';
import Content from 'components/layout/Content';
import Nav from 'components/nav';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  activePath: string;
}

const BudgetingPage: React.FC<Props> = ({ activePath = '' }) => {
  return (
    <>
      <Nav activePath={activePath} />
      <Content>
        <GrowColumn>content</GrowColumn>
        <FixedColumn>column</FixedColumn>
      </Content>
    </>
  );
};

export default BudgetingPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;

  return {
    props: {
      activePath,
    },
  };
};
