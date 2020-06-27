import styled from '@emotion/styled';

interface Props {
  url: string;
  width?: number | string;
  height?: number | string;
}

const SVGIcon = styled.div<Props>(
  ({ url, width = '100%', height = '100%' }) => ({
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width,
    height,
  }),
);

export default SVGIcon;
