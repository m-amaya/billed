import styled from '@emotion/styled';
import Flex from 'components/Flex';

export const Form = styled(Flex)({
  '& > [data-input="true"]': {
    marginBottom: 20,

    '&:last-child': {
      marginBottom: 0,
    },
  },
});
