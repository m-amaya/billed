import Flex from 'components/Flex';
import Nav from 'components/nav';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  activePath: string;
  categoryId: string;
}

const AddCategoryPage: React.FC<Props> = ({
  activePath = '',
  categoryId = '',
}) => {
  return (
    <>
      <Nav activePath={activePath} />
      <Flex grow>content</Flex>
    </>
  );
};

export default AddCategoryPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activePath = ctx.req.url;
  const categoryId = ctx.params?.categoryId;

  return {
    props: {
      activePath,
      categoryId,
    },
  };
};
