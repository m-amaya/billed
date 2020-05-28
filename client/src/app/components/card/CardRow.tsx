import styled from '@emotion/styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { LabelText, Subtext } from 'styles/text';

interface Props {
  icon: IconProp;
  label: string;
  subtext?: string;
  borderColor?: string;
  iconColor?: string;
  isActive?: boolean;
}

export const CardRow: React.FC<Props> = ({
  icon,
  label,
  subtext,
  borderColor = '#937DD1',
  iconColor = '#9B98A6',
  isActive = false,
  children,
}) => {
  return (
    <Row active={isActive.toString()} bordercolor={borderColor}>
      <Left>
        <Icon color={iconColor} icon={icon} />
        <Content>
          <LabelText>{label}</LabelText>
          {subtext && <Subtext>{subtext}</Subtext>}
        </Content>
      </Left>
      <Right>{children}</Right>
    </Row>
  );
};

const Row = styled.div<{ active: string; bordercolor: string }>(
  ({ active, bordercolor }) => ({
    'cursor': 'pointer',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'backgroundColor': active == 'true' ? '#FAFAFA' : '#FFFFFF',
    'borderLeftColor': active === 'true' ? bordercolor : 'transparent',
    'borderLeftStyle': 'solid',
    'borderLeftWidth': 5,
    'height': 65,
    'width': '100%',
    'transition': 'all 300ms',
    '&:hover': {
      backgroundColor: '#FAFAFA',
    },
  }),
);

const Left = styled.div({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 20,
});

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Right = styled.div({
  paddingRight: 20,
});

const Icon = styled(FontAwesomeIcon)<{ color: string }>((props) => ({
  color: props.color,
  fontSize: 20,
  marginRight: 15,
}));
