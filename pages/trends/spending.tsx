import { FixedColumn, GrowColumn } from 'components/layout/Column';
import Content from 'components/layout/Content';
import Nav from 'components/nav';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  activePath: string;
}

const SpendingPage: React.FC<Props> = ({ activePath = '' }) => {
  return (
    <>
      <Nav activePath={activePath} />
      <Content>
        <FixedColumn>column</FixedColumn>
        <GrowColumn side="right">content</GrowColumn>
      </Content>
    </>
  );
};

export default SpendingPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;

  return {
    props: {
      activePath,
    },
  };
};
