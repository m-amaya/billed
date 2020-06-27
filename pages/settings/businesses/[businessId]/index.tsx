import { SidebarColumn, DetailColumn } from 'components/layout/Column';
import Content from 'components/layout/Content';
import Nav from 'components/nav';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  activePath: string;
  businessId: string;
}

const BusinessDetailPage: React.FC<Props> = ({
  activePath = '',
  businessId = '',
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

export default BusinessDetailPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;
  const businessId = ctx.params?.businessId;

  return {
    props: {
      activePath,
      businessId,
    },
  };
};
