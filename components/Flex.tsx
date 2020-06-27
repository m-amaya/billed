import styled from '@emotion/styled';

interface Props {
  row?: boolean;
  center?: 'x' | 'y' | boolean;
  grow?: boolean;
  spaceBetween?: boolean;
  width?: string | number;
  height?: string | number;
}

const Flex = styled.div<Props>(
  ({
    row = false,
    center = false,
    grow = false,
    spaceBetween = false,
    width = '100%',
    height = 'auto',
  }) => {
    let alignItems, justifyContent;

    if (center === true || center === 'x') {
      if (row) {
        justifyContent = 'center';
      } else {
        alignItems = 'center';
      }
    }

    if (center === true || center === 'y') {
      if (row) {
        alignItems = 'center';
      } else {
        justifyContent = 'center';
      }
    }

    if (spaceBetween) {
      justifyContent = 'space-between';
    }

    return {
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
      flexGrow: grow ? 1 : undefined,
      alignItems,
      justifyContent,
      width,
      height,
    };
  },
);

export default Flex;
