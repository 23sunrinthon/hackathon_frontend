import React from 'react';
import styled from 'styled-components/native';
import { colors } from "../values/color";
interface Props {
  color?: string;
  size: number;
  weight: number;
  children: React.ReactNode;
}

const Typography = (props: Props) => {
  let fontFamily = 'SUIT-Medium';
  switch (props.weight) {
    case 400:
      fontFamily = 'SUIT-Regular';
      break;
    case 500:
      fontFamily = 'SUIT-Medium';
      break;
    case 600:
      fontFamily = 'SUIT-SemiBold';
      break;
    case 700:
      fontFamily = 'SUIT-Bold';
      break;
    default:
      fontFamily = 'SUIT-Medium';
      break;
  }

  const Container = styled.Text`
    color: ${colors[props.color || 'gray600']};
    font-size: ${props.size + 'px'};
    font-family: ${fontFamily};
    letter-spacing: -0.0255rem;
    line-height: normal;
  `;
  return <Container>{props.children}</Container>;
};

export default Typography;
