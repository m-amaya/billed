import styled from '@emotion/styled';
import Flex from 'components/Flex';
import { rgba } from 'utils/color';

const Card = styled(Flex)({
  backgroundColor: '#FFF',
  border: `1px solid ${rgba('#B2B2B2', 0.25)}`,
  borderRadius: 10,
  boxShadow: `0 1px 1px ${rgba('#B2B2B2', 0.5)}`,
  overflow: 'hidden',
});

export default Card;
